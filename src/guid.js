//Wrapper for node-uuid in case I wish to change it sometime.  Also, I like having GUID.empty;

var uuid = require('node-uuid');

module.exports = class GUID{
	constructor(){
	this.newGUID = ()=>{
		return uuid.v1();
	};
	}

	get empty() { return '00000000-0000-0000-0000-000000000000'; }
};
