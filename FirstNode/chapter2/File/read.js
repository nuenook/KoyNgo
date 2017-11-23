var fs = require('fs');

fs.readFile('./chapter2/File/read/b1.txt','utf-8', function(err, data) {
    if(err) throw err;

    console.log(data);
})

// var data = fs.readFileSync('./chapter2/File/read/b1.txt', 'utf8');
// console.log(data);


// var func = 