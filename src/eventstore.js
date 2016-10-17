let eventPersistor = require('./Persist');



const _events = Symbol('events');

module.export = class EventStore {
    constructor() {
        let storage = new eventPersistor(__dirname);
        this[_events] = storage.retrieveEvents();

        this.addEvent = (evt) => {
            storage.persist(evt);
            this[_events] = storage.retrieveEvents();
        };

        this.getAllEvents = () => {
            //Should attempt a refresh before returning
            this[_events] = storage.retrieveEvents();
            return this[_events];
        };

        //Still to be done...
        //Refresh on an interval
        //Filter based on EventType
        //Filter based on a snapshot dateTime

    }




}
