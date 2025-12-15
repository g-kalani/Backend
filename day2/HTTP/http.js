// --- Introduction to HTTP/HTTPS and Node.js Server ---

// HTTP (Hypertext Transfer Protocol):
// HTTP is the foundation of data communication for the World Wide Web. 
// It is a protocol used for sending and receiving data between a client (like a browser) 
// and a server. It typically uses port 80 and transmits data in plain text.

// HTTPS (Hypertext Transfer Protocol Secure):
// HTTPS is the secure version of HTTP. It uses SSL/TLS encryption to secure 
// data transmission, making it suitable for sensitive data like login credentials 
// and financial transactions. It typically uses port 443.

// Server Definition in Node.js:
// A server is a software program that runs on a computer and waits for incoming 
// network requests. Node.js's 'http' module allows us to create such a server
// that listens on a specific port and responds to client requests.


// --- HTTP Server Operations (using the built-in 'http' module) ---

// 1. Import the built-in 'http' module
const http = require('http'); 

// 2. Create the Server
// The http.createServer() method creates an HTTP Server object.
// It accepts a callback function that executes every time a request is made 
// to the server. This function takes two arguments:
//   - req (Request): Contains information about the request (e.g., URL, headers).
//   - res (Response): Used to send data back to the client.
// (Based on image_ff5f16.png, lines 3-5)
const server = http.createServer(function(req, res) {
    // Set the HTTP header for the content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body "hello world" and close the connection
    res.end("hello world"); 
    
    // NOTE: For more complex routing, you would check req.url here (e.g., if (req.url === '/'))
});

// 3. Listen on a Port
// The server.listen() method binds the server to a specific network port (e.g., 3000)
// and starts listening for client connections. This is the last line of the script.
server.listen(3000, function() {
    console.log("Server is running at http://localhost:3000/");
    console.log("A simple Node.js server created!");
});