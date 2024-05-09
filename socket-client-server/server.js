const express = require('express');
const socketIO = require('socket.io');
const path=require('path');
const app = express();
const server = app.listen(3000,()=>{
 console.log("Server started on port 3000");
});
const io = socketIO(server);
app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
io.on('connection', socket => {
     console.log('A user connected');
     // Listen for 'join' event when a new user joins
     socket.on('join', username => {
      socket.username = username;
      io.emit('chat message', { type: 'notification', message: `${username} has joined the chat` });
     });
     // Listen for 'chat message' events from clients
     socket.on('chat message', msg => {
      io.emit('chat message', { type: 'message', username: socket.username, message: msg });
     });
     // Listen for 'disconnect' event when a user leaves
     socket.on('disconnect', () => {
      console.log('A user disconnected');
      if (socket.username) {
       io.emit('chat message', { type: 'notification', message: `${socket.username} has left the chat` });
      }
     });
    });
    