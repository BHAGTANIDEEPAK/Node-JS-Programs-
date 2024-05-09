// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const usersRouter = require('./routes/users');

const app = express();
const PORT =  3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use(usersRouter);

// Connect to database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
