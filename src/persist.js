let fs = require('fs');
let eventFactory = require('./event');


module.exports = class EventPersistor {
    constructor(filePath) {
        this.filePath = filePath;
        this.factory = new eventFactory();

        this.persist = (evt) => {
            //Persist a single event
            let fileName = this.filePath + '//' + evt.messageId;
            fs.writeFile(filePath, evt, function(error) {
                if (error) {
                    console.log("BAD NEWS!!!!!");

                }

            });
        }
        this.retrieveEvents = () => {
            let events = new Array();
            //Get all events from the stream
            fs.readdir(__dirname, function(err, files) {
                if (err) return events;
                files.forEach(function(f) {
                    //Read Each file
                    fs.readFile(f, 'utf8', function(err, contents) {
                        if (err) {
                            console.log('BOOM');
                        } else {
                            let evt = factory.getSerializedEvent(contents);.
                            events.push(evt);
                        }

                    });
                });
            });
            //Sort descending
            return events.sort((a, b) => {
                return b - a
            };);
        }
    }
}
