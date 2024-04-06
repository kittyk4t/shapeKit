// var fabric = require('fabric').fabric, // or import { fabric } from 'fabric';
//     http = require('http'),
//     url = require('url'),
//     PORT = 8124;

// const hostname = '127.0.0.1';

// var server = http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'image/png' });

//     var canvas = new fabric.Canvas('c1');
//     canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));

//     canvas.selectionColor = 'rgba(0,255,0,0.3)';
//     canvas.selectionBorderColor = 'red';
//     canvas.selectionLineWidth = 5;

//     canvas.renderAll();
//     var stream = canvas.createPNGStream();
//     stream.on('data', function (chunk) {
//         response.write(chunk);
//     });
//     stream.on('end', function () {
//         response.end();
//     });
// });

// server.listen(PORT, hostname, () => {
//     console.log(`Server running at http://${hostname}:${PORT}/`);
// });


var fabric = require('fabric').fabric;// or import { fabric } from 'fabric';
var canvas = new fabric.Canvas('c');

// create a rectangle with angle=45
var rect = new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20,
    angle: 45
});

canvas.add(rect);
