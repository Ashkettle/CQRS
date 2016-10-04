let CommandFactory = require('./command.js');
let fs = require("fs");


let message = { name: 'Richard', address: '125 Marose Dr' };
let commandFactory = new CommandFactory();

let command = commandFactory.getNewCommand(message);


fs.writeFile('test.txt',JSON.stringify(command), function(err){
	if(err){
		return console.error(err);
	}
});




