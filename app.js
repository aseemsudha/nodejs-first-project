const logger = require('./logger');
const log = require('./logger-2');
const path = require('path');
const os = require('os');
const fs = require('fs'); 
const EventEmitter = require('events');
const Eventer = require('./events');
const http = require('http');

//////////////how the require statment works and how the module is exported
console.log(logger);
logger.log('my message');
log('my message from logger-2');

//////////understanding the inbuild module in node
var pathObj = path.parse(__filename);
console.log(pathObj);

/////////////new way of console logging in ES6///////called template string
//console.log(`Total memmory: ${totalMemmory}`);


/////////inbuild os module in node///////////
var totalMemmory = os.totalmem();
var freeMemory = os.freemem();
console.log(`Free memmory: ${freeMemory}`);
console.log('Total memory' + totalMemmory);

//////////reading file system
const files = fs.readdirSync('./');
console.log(files);

const filesAvailable = fs.readdirSync('./', function(err, files){
  if(err){
    console.log('Error', err)
  }else{
    console.log('Result', filesAvailable);
  }
});

/////////events///////////////
const emitter = new EventEmitter();

// register a listener for event//
emitter.on('messageLogged', function(arg){
  console.log(`Listener called ${arg.id}, ${arg.url}`);
  console.log('Listener called', arg);
});
//raise an event//
emitter.emit('messageLogged',{id:1, url:'http://'});


////////created a separate event emitter class and called here/////////
const eventer = new Eventer();
eventer.on('messageEventLogged', function(arg){
  console.log(`Listener from events class called ${arg.id}, ${arg.url}`);
  console.log('Listener from events class called', arg);
});

eventer.emitEvent('my message to eventer class where event is getting emit');


/////////////////////////http module//////
const server = http.createServer(function(req, res){
  if(req.url === '/'){
    res.write('Hello world');
    res.end();
  }
  if(req.url === '/api/courses'){
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.on('connection', function(socket){
  console.log('new connection');
})
server.listen(3001);
console.log('Listening on port 3001');










