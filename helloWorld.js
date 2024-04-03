//testing running a server
// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


// var fs = require('fs'),
//     fabric = require('fabric').fabric,
//     out = fs.createWriteStream(__dirname + '/helloworld.png');

// var canvas = new fabric.StaticCanvas(null, { width: 200, height: 200 });
// var text = new fabric.Text('Hello world', {
//     left: 100,
//     top: 100,
//     fill: '#f55',
//     angle: 15
// });
// canvas.add(text);
// canvas.renderAll();


// var stream = canvas.createPNGStream();
// stream.on('data', function (chunk) {
//     out.write(chunk);
// });


//testing server and fabric

var fabric = require('fabric').fabric, // or import { fabric } from 'fabric';
    http = require('http'),
    url = require('url'),
    PORT = 8124;

var server = http.createServer(function (request, response) {
    var params = url.parse(request.url, true);
    var canvas = new fabric.StaticCanvas(null, { width: 200, height: 200 });

    response.writeHead(200, { 'Content-Type': 'image/png' });

    canvas.loadFromJSON(params.query.data, function () {
        canvas.renderAll();

        var stream = canvas.createPNGStream();
        stream.on('data', function (chunk) {
            response.write(chunk);
        });
        stream.on('end', function () {
            response.end();
        });
    });
});
const hostname = '127.0.0.1';
server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});
server.listen(PORT);