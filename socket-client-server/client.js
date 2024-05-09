const net = require('net');

// Create a socket client
const client = new net.Socket();

// Connect to the server
const PORT = 3000;
const HOST = 'localhost';
client.connect(PORT, HOST, () => {
  console.log('Connected to server');

  // Send a message to the server
  client.write('Hello from client!');
});

// Handle incoming messages from the server
client.on('data', (data) => {
  console.log('Received from server:', data.toString());
});

// Handle server connection termination
client.on('close', () => {
  console.log('Connection closed');
});
