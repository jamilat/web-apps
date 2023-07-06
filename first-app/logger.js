//(function (exports, require, module, __filename, __dirname) { // implicit wrapper

    console.log(__filename);
    console.log(__dirname);

    const EventEmitter = require('events');

    var url = 'http://mylogger.io/log'; // send http request to endpoint

    class Logger extends EventEmitter {
        log(message) {
            // Send an HTTP request
            console.log(message);
    
            // Raise an event
            this.emit('messageLogged', { id: 1, url: 'http://'}); // signal event has occurred
        }
    }

    module.exports = Logger; // export Logger class

//})