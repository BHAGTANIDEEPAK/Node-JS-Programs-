// Encode a string into a buffer
const encodeStringToBuffer = (str) => {
    return Buffer.from(str);
};

// Decode a buffer back into a string
const decodeBufferToString = (buffer) => {
    return buffer.toString();
};

// Test string
const testString = "Hello, world!";

// Encode the string into a buffer
const encodedBuffer = encodeStringToBuffer(testString);
console.log("Encoded buffer:", encodedBuffer);

// Decode the buffer back into a string
const decodedString = decodeBufferToString(encodedBuffer);
console.log("Decoded string:", decodedString);
