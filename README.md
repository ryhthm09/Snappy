# Snappy  

Snappy is a real-time chat application built using **React**, **Node.js**, **Express.js**, **Socket.IO**, and **MongoDB**. The application allows users to register, log in, choose an avatar, and chat with all other registered users.  

## Features  

- **User Registration**: Securely register with a unique username and password.  
- **Login System**: Access the app using your credentials.  
- **Avatar Selection**: Customize your profile by choosing an avatar.  
- **Real-Time Chat**: Engage in live chats with all users in the app.  

---

## Screenshot  

![image](https://github.com/user-attachments/assets/b9e0372a-6a9c-4488-ae1e-49135f5b7acf)


![image](https://github.com/user-attachments/assets/2d36c824-5c45-4068-af47-0b4bf458b285)


![image](https://github.com/user-attachments/assets/3bbc7036-9aec-4d91-bdf7-6a6e67ff70c1)


 

---

## Technologies Used  

- [**React.js**](https://reactjs.org/): Frontend framework for building the user interface.  
- [**Node.js**](https://nodejs.org/): Backend runtime environment.  
- [**Express.js**](https://expressjs.com/): Web framework for handling API endpoints.  
- [**Socket.IO**](https://socket.io/): Real-time, bidirectional communication between the client and server.  
- [**MongoDB**](https://www.mongodb.com/): NoSQL database for user data and chats.  

---

 

---

## Installation  

Follow these steps to set up Snappy locally:  

### 1. **Clone the Repository**  
```bash  
git clone https://github.com/your-username/snappy.git  
cd snappy
```

### 2. **Backend Setup (Server Folder)**  
Navigate to the server directory and set up the backend:
```bash  
cd server  
npm install   # Install dependencies
```
Create a .env file in the server folder with the following variables:
```bash
PORT=your_server_port  
MONGO_URI=your_mongodb_connection_string  
  
```
Start the server using nodemon:
```bash
nodemon app.js
```
### 3. **Frontend Setup (Public Folder)**
Navigate to the public directory and set up the React app:
```bash
cd ../public  
npm install   # Install dependencies  
```
Start the frontend development server:
```bash
npm start  
```
The React app will open in your browser at http://localhost:3000.

## Usage  

- **Run the Server**: Start the backend services by running `server/app.js`.  
- **Launch the Frontend**: Open the React app to access the user interface.  
- **Interact**: Register or log in to chat with other registered users.  

**Contributing**
Contributions are welcome! Please feel free to submit a pull request or issue to enhance the project.

**Contact**
For any questions or feedback, please reach out at:

Email:anandsharma1123@gmail.com

GitHub: @ryhthm09

