const express = require('express')
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser')
const socketio = require('socket.io')

let app = express()

// BodyParser to parse post requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set Static Directory
app.use(express.static(__dirname + "/src"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve("src/index.html"));
});
  
// Listen for HTTP Requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});