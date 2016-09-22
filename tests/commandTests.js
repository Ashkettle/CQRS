var should = require('should');
var CommandFactory = require('../src/command');

describe('Command',function(){
	it('should be immutable',function(){
		let commandFactory = new CommandFactory();
		let message = 'Original';
		let command = commandFactory.getNewCommand(message);
		
		command.message.should.equal('Original');
		
		let timestamp = command.timestamp;
		let correlationId = command.correlationId;
		
		command.message = 'New';
		command.message.should.equal('Original');
		
		command.timestamp = Date.now();
		command.timestamp.should.be.exactly(timestamp);
		
		command.correlationId = 23;
		command.correlationId.should.be.exactly(correlationId);


	});
});

