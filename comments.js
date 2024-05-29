// Create web server
// Create a server that listens on port 3000 and serves the comments.html file.
// Use the fs module to read the file and then send it to the client.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('comments.html', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('404 Not Found');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});