//This is the entry point for the Application
//
var Command = require('./command');

var msg = { from: 'me', to: 'you' };

var comm = new Command(msg);

console.log(comm.message);
console.log(comm.timestamp);
console.log(comm.correlationId);
