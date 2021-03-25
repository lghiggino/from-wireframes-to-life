// const os = require("os")

// let totalMemory = os.totalmem()
// let freeMemory = os.freemem()
// let cpus = os.cpus()
// let networkInterfaces= os.networkInterfaces()
// let platform = os.platform()

// console.log(totalMemory,freeMemory)
// console.log(cpus)
// console.log(networkInterfaces);
// console.log(platform)

// console.log(`This ${platform} system total memmory is: ${totalMemory}, and the used memmory is ${totalMemory - freeMemory
// }` )
// const logFunction = require('./logger')
// logFunction("olá, como vai você hoje?")

/* FILE SYSTEM */
// const fs = require("fs");

// const files = fs.readdir("../../../../../../../100 - Devs", {encoding: "utf-8"}, (err, files) => {
//     if (err) console.log(err);
//     if (files) console.log(files);
// })
// console.log(files)

/* EVENTS MODULE */
// const EventEmitter = require ("events");

// const Logger = require("./logger")
// const logger = new Logger()

// //register a listener
// logger.on("messageLogged", (args) => {
//     console.log("listener called:", args)
    
// })

// logger.on("bananaEvent", (args) => {
//     console.log("Current Iventory:", args)
// })

// logger.log()


// emitter.on("logging", (arg) => {
//     console.log("logging event fired with the following args:", arg)
// })

// emitter.emit("logging", {id: "lg9827-1", name:"John Doe", message:"Hello, I need a new axe to cut my trees"})

const http = require ("http")
const server = http.createServer( (req, res) => {
    if(req.url == "/"){
        res.write("hello world, baybay");
        res.end();
    }
    else if(req.url == "/about"){
        res.write("hello from about");
        res.end();
    }
    else if(req.url == "/coinFlip"){
        randomization = Math.ceil(Math.random() * 2)
        randomization === 1 ? res.write("heads") : res.write("tails")
        // res.write(randomization.toString());
        res.end();
    }
    else{
        res.write("page not found");
        res.end();
    }
})

server.listen(3000)

console.log("listening on port 3000...")