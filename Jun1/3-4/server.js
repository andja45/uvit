const http = require('http');

const app = require('./app');

const server = http.createServer(app);
const port = 3007;
server.listen(port);

server.once('listening', function () {
    console.info(`Started the server on http://localhost:${port}`);
});
