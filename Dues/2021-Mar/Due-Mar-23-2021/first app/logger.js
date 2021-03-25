const EventEmitter = require ("events");

let url = "http://mylogger.io/log"

class Logger extends EventEmitter{
    log(message){
        //send http request
        console.log(message)
    
        //register the event
        this.emit("messageLogged", {id: 1, phoneNumber: 984432508, callDuration: "5minutes, 38 seconds"})
        this.emit("bananaEvent", {fruit: "banana", quantity: 12})
    }
}

module.exports = Logger;


