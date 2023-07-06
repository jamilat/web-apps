


// // paths:
// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);

// // os:
// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// // filesystem:
// const fs = require('fs');

// const files = fs.readdirSync('./'); // always use asynchronous methods since Node is single-threaded
// console.log(files);

// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

// // events (signal idicating something happened in app):
// const EventEmitter = require('events');

// const Logger = require('./logger'); // loads module. module increases scalability
// const logger = new Logger();

// // Register a listener
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// });

// logger.log('message');

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Chau Bella');
        res.end();
    }

    if (req.url === 'api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.on('connection', (socket) => {
    console.log('New connection...');
});

server.listen(3000);

console.log('Listening on port 3000...');