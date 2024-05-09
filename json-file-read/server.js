const fs = require('fs');

// Function to process JSON data
const processJSON = (jsonData) => {
    // Manipulate the JavaScript object here
    // For example, let's log the keys and values
    for (const key in jsonData) {
        console.log(`${key}: ${jsonData[key]}`);
    }
};

// Read the JSON file
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
    } else {
        try {
            // Parse JSON data
            const jsonData = JSON.parse(data);
            // Process the JSON data
            processJSON(jsonData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    }
});
