const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messagesRoutes");
const socket = require("socket.io");

const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

const credential = new DefaultAzureCredential();
const vaultName = 'kvsnappy';  
const keyVaultUrl = `https://${vaultName}.vault.azure.net`;  
const client = new SecretClient(keyVaultUrl, credential);

console.log("Connected to Azure Key Vault");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/messages", messageRoutes);

(async () => {
  try {
    const MONGO_URL_SECRET = await client.getSecret("MONGO-URL");
    const MONGO_URL = MONGO_URL_SECRET.value;
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connection Successful");
  } catch (err) {
    console.log(err.message);
  }

  const PORT_SECRET = await client.getSecret("PORT");
  const PORT = PORT_SECRET.value || 5000;
  const CORS_ORIGIN_SECRET = await client.getSecret("CORS-ORIGIN");
  const CORS_ORIGIN = CORS_ORIGIN_SECRET.value;


  app.use(express.static("public/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "build", "index.html"));
  });


  const server = app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
  });

  const io = socket(server, {
    cors: {
      origin: CORS_ORIGIN,
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  global.onlineUsers = new Map();

  io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
      onlineUsers.set(userId, socket.id);
    });
    socket.on("send-msg", (data) => {
      const sendUserSocket = onlineUsers.get(data.to);
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit("msg-receive", data.message);
      }
    });
  });
})();
