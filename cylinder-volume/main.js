// main.js

// Importing the calculateCylinderVolume function from the cylinderVolume module
const calculateCylinderVolume = require('./cylinderVolume');

// Example usage
const radius = 5;
const height = 10;
const volume = calculateCylinderVolume(radius, height);
console.log('Volume of the cylinder:', volume);
