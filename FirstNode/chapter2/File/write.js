// fs.writeFile(filename, data[, options], callback)

var fs = require('fs');

fs.writeFile('./chapter2/File/write/test.txt', 'Hello World!', function (err) { 
    if (err)
        console.log(err);
    else
        console.log('Write operation complete.');
});