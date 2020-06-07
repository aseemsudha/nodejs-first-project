var url = 'http://mylogger.io/log'

console.log(__filename);
console.log(__dirname);
function log(message){
    console.log(message);
}

module.exports.log = log;
//module.exports.endPoint = url;