//Base class for a Command
var guid = require('./guid');

module.exports = class Command{
	constructor(message){
		let GUID = new guid();
		this.correlationId = GUID.newGUID();
		this.message = message;
		this.timestamp = Date.now();
	};
}	
