const fs = require('fs');

// Asynchronous file reading
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file asynchronously:', err);
    } else {
        console.log('Asynchronous file content:\n', data);
    }
});

// Synchronous file reading
try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log('Synchronous file content:\n', data);
} catch (err) {
    console.error('Error reading file synchronously:', err);
}
