const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const PORT = 3002;
// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://bhagtanideepak77:123@cluster0.onxo90d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
  
  // Define User model
  const User = mongoose.model('User', userSchema);
  
  // Middleware
  app.use(bodyParser.json());
  app.use(express.static('public'));
  
  // Routes
  app.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  app.post('/users', async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.sendStatus(201);
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  app.put('/users/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const updatedUser = req.body;
      await User.findByIdAndUpdate(userId, updatedUser);
      res.sendStatus(204);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  app.delete('/users/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      await User.findByIdAndDelete(userId);
      res.sendStatus(204);
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Start server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });