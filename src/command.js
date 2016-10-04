//Base class for a Command

let guid = require('./guid');

const _correlationId = Symbol('correlationId');
const _message = Symbol('message');
const _timestamp = Symbol('timestamp');


/**
 *
 *
 * @returns {undefined}
 */
let command = class Command {
    constructor(message) {
        let GUID = new guid();
	    
        this[_correlationId] = GUID.newGUID();
        this[_message] = message;
        this[_timestamp] = Date.now();
    };
	get correlationId() { return this[_correlationId]; }
	get message() { return this[_message]; }
	get timestamp() { return this[_timestamp]; }
}

module.exports = class CommandFactory {
    constructor() {
        this.getNewCommand = (message) => {
            const retVal = Object.freeze(new command(message));

            return retVal;
        }

    }
}
