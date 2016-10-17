let guid = require('./guid');

const _message = Symbol('message');
const _correlationId = Symbol('coorelationId');
const _eventId = Symbol('eventId');
const _timestamp = Symbol('timestamp');
const _version = Symbol('version');
const _eventType = Symbol('eventType');


let event = class Event {
    constructor(eventType, message, coorelationId, version, timestamp, eventId) {
        this[_message] = message;
        this[_correlationId] = coorelationId;
        if (eventId === null) {
            this[_eventId] = guid.newGuid();
        } else {
            this[_eventId] = eventId;
        }
        if (timestamp === null) {
            this[_timestamp] = Date.now();
        } else {
            this[_timestamp] = timestamp;
        }
        this[_version] = version;
        this[_eventType] = eventType;

        this.serialize = () => {
            return {
                message: this[_message],
                coorelationId: this[_coorelationId],
                eventType: this[_eventType],
                version: this[_version],
                timestamp: this[_timestamp],
                eventId: this[_eventId]
            };
        };
    };
    get message() {
        return this[_message];
    }
    get coorelationId() {
        return this[_coorelationId];
    }
    get eventId() {
        return this[_eventId];
    }
    get timestamp() {
        return this[_timestamp];
    }
    get version() {
        return this[_version];
    }
    get eventType() {
        return this[_eventType];
    }
};

module.export = class EventFactory {
    constructor() {
        this.getNewEvent = (eventType, message, coorelationId, version, null, null) => {
            return Object.freeze(new Event(eventType, message, coorelationId, version));

        };
        this.getDeserializedEvent(data) => {
            return Object.freeze(new Event(eventType, message, coorelationId, version, timestamp, eventId));

        };

    };
};
