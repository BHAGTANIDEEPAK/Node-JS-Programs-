// cylinderVolume.js

// Function to calculate the volume of a cylinder
function calculateCylinderVolume(radius, height) {
    const pi = Math.PI;
    const volume = pi * radius * radius * height;
    return volume;
}

// Exporting the function so it can be used in other files
module.exports = calculateCylinderVolume;
