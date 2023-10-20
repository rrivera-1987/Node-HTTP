const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello World!</h1></body></html');
});

/* Starting the server */
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});

/* Request and Response objects are special types of objects called string. With stings, data is not transmitted
all at once, but by pieces.

*/