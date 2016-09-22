//Base class for a Command

let guid = require('./guid');

/**
 *
 *
 * @returns {undefined}
 */
let command = class Command{
	constructor(message){
		let GUID = new guid();
		this.correlationId = GUID.newGUID();
		this.message = message;
		this.timestamp = Date.now();
	};
}

module.exports = class CommandFactory{
	constructor(){
		this.getNewCommand = (message)=>{ 
			const retVal = Object.freeze(new command(message));
			
			return retVal; 
		}

	}	
}
