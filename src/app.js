//This is the entry point for the Application
//
var CommandFactory = require('./command');

var msg = { from: 'me', to: 'you' };

var cf = new CommandFactory();
var comm = cf.getNewCommand(msg);

console.log(comm.message);
console.log(comm.timestamp);
console.log(comm.correlationId);

comm.message = 'foo';
console.log(comm.message);
