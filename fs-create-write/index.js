const fs = require('fs');

// Data to be written to the file
const data = 'Hello, world! This is the data to be written to the file.';

// File path
const filePath = 'example.txt';

// Write data to a new text file
fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Data has been written to', filePath);
    // Confirm the success of the operation by reading the file
    fs.readFile(filePath, 'utf8', (err, fileData) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        console.log('Data read from file:', fileData);
      }
    });
  }
});
