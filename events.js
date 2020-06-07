const EventEmitter = require('events');

class Eventer extends EventEmitter{
    emitEvent(message){
        console.log(message);
        this.emit('messageEventLogged',{id:1, url:'http://'});
    }
}


module.exports = Eventer;
//module.exports.endPoint = url;