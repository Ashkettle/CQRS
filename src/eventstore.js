const _events = Symbol('events');

module.export = class EventStore{
	constructor(){
		this[_events] = new array(); //Get the event list from storage here
	       	
		this.getAllEvents = ()=>{
			return this[_events];
		}


	}




}
