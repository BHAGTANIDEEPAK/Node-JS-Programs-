// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('user_management', 'postgres', 'admin', {
  dialect: 'postgres',
  host: 'localhost'
});

module.exports = sequelize;
