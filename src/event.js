let guid = require('./guid');

let event = class Event {
    constructor(eventType, message, coorelationId, version) {
        this.message = message;
        this.correlationId = coorelationId;
        this.eventId = guid.newGuid();
        this.timestamp = Date.now();
        this.version = version;
        this.eventType = eventType;

    };
};

module.export = class EventFactory {
        constructor() {
            this.getNewEvent = (eventType, message, coorelationId, version) => {
                return Object.freeze(new Event(eventType, message, coorelationId, version);

                };

            };
        };
