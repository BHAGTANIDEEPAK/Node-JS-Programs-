// seed.js
const sequelize = require('./config/database');
const User = require('./models/user');

// Define sample user data
const userData = [
  { username: 'john_doe', email: 'john@example.com', password: 'password1' },
  { username: 'jane_smith', email: 'jane@example.com', password: 'password2' },
  // Add more sample user data as needed
];

// Insert sample user data into the database
const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Force sync to drop existing tables and recreate them
    await User.bulkCreate(userData);
    console.log('Sample data inserted successfully.');
  } catch (error) {
    console.error('Error inserting sample data:', error);
  } finally {
    process.exit(); // Exit the script
  }
};

// Execute the seed function
seedDatabase();
