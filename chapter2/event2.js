var emitter = require('events').EventEmitter;

var em = new emitter();

em.on('startProgram', function(arg){

console.log('startProgram event run '+arg);

});

em.on('startProgram', function(arg){

console.log('startProgram event run point 2 '+arg);

});

//em.emit('startProgram', "eiei");