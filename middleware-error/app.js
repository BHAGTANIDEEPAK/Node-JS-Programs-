const express = require("express");
const fs = require("fs");
const app = express();

app.use((req, res, next) => {
  const logFilePath = __dirname + "/request.log";
  const logEntry = `${new Date().toISOString()}: ${req.method} ${req.url}\n`;
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
  next(); 
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
