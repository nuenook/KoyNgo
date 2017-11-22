// include module
var http = require("http");

http.createServer(function (req, res) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    if (req.url == '/') { //check the URL of the current request

        // set response header
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();

    } else if (req.url == "/student") {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();

    } else if (req.url == "/admin") {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();

    } else if (req.url == '/data') { //check the URL of the current request
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.write(JSON.stringify({
            message: "Hello World"
        }));
        res.end();
    } else
        res.end('Invalid Request!');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');