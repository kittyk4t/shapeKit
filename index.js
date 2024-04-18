const initCanvas = (id) => {
    const canvas =
        new fabric.Canvas(id, {
            width: 700, height: 500
        });
    canvas.freeDrawingBrush.color = "black"
    canvas.freeDrawingBrush.width = 3
    return canvas

}

const setBackgroundImage = (url, canvas) => {

    canvas.setBackgroundImage(url, canvas.renderAll.bind(canvas), {
        backgroundImageOpacity: 1,
        originX: "left",
        originY: "top",
        scaleX: canvas.width / url.width,
        scaleY: canvas.height / url.height
    });

    canvas.renderAll()
}


function openHelpPage() {
    window.open('help.html', '_blank');
}


// create a rect object
var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
var cloneIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 55.699 55.699' width='100px' height='100px' xml:space='preserve'%3E%3Cpath style='fill:%23010002;' d='M51.51,18.001c-0.006-0.085-0.022-0.167-0.05-0.248c-0.012-0.034-0.02-0.067-0.035-0.1 c-0.049-0.106-0.109-0.206-0.194-0.291v-0.001l0,0c0,0-0.001-0.001-0.001-0.002L34.161,0.293c-0.086-0.087-0.188-0.148-0.295-0.197 c-0.027-0.013-0.057-0.02-0.086-0.03c-0.086-0.029-0.174-0.048-0.265-0.053C33.494,0.011,33.475,0,33.453,0H22.177 c-3.678,0-6.669,2.992-6.669,6.67v1.674h-4.663c-3.678,0-6.67,2.992-6.67,6.67V49.03c0,3.678,2.992,6.669,6.67,6.669h22.677 c3.677,0,6.669-2.991,6.669-6.669v-1.675h4.664c3.678,0,6.669-2.991,6.669-6.669V18.069C51.524,18.045,51.512,18.025,51.51,18.001z M34.454,3.414l13.655,13.655h-8.985c-2.575,0-4.67-2.095-4.67-4.67V3.414z M38.191,49.029c0,2.574-2.095,4.669-4.669,4.669H10.845 c-2.575,0-4.67-2.095-4.67-4.669V15.014c0-2.575,2.095-4.67,4.67-4.67h5.663h4.614v10.399c0,3.678,2.991,6.669,6.668,6.669h10.4 v18.942L38.191,49.029L38.191,49.029z M36.777,25.412h-8.986c-2.574,0-4.668-2.094-4.668-4.669v-8.985L36.777,25.412z M44.855,45.355h-4.664V26.412c0-0.023-0.012-0.044-0.014-0.067c-0.006-0.085-0.021-0.167-0.049-0.249 c-0.012-0.033-0.021-0.066-0.036-0.1c-0.048-0.105-0.109-0.205-0.194-0.29l0,0l0,0c0-0.001-0.001-0.002-0.001-0.002L22.829,8.637 c-0.087-0.086-0.188-0.147-0.295-0.196c-0.029-0.013-0.058-0.021-0.088-0.031c-0.086-0.03-0.172-0.048-0.263-0.053 c-0.021-0.002-0.04-0.013-0.062-0.013h-4.614V6.67c0-2.575,2.095-4.67,4.669-4.67h10.277v10.4c0,3.678,2.992,6.67,6.67,6.67h10.399 v21.616C49.524,43.26,47.429,45.355,44.855,45.355z'/%3E%3C/svg%3E%0A"

var img = document.createElement('img');
img.src = deleteIcon;
var cloneImg = document.createElement('img');
cloneImg.src = cloneIcon;


const createRect = (canvas) => {
    const newRect = new fabric.Rect({
        width: 100, height: 100, stroke: canvas.freeDrawingBrush.color, strokeWidth: canvas.freeDrawingBrush.width,
        fill: 'rgba(0,0,0,0)', top: 0, left: 0,
        objectCaching: false
    })
    canvas.add(newRect)
    canvas.setActiveObject(rect);
    canvas.renderAll()

}


function renderIcon(icon) {
    return function renderIcon(ctx, left, top, styleOverride, fabricObject) {
      var size = this.cornerSize;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      ctx.drawImage(icon, -size/2, -size/2, size, size);
      ctx.restore();
    }
  }

fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetX: -16,
    offsetY: 16,
    cursorStyle: 'pointer',
    mouseUpHandler: deleteObject,
    render: renderIcon,
    cornerSize: 24
    });

// fabric.Object.prototype.controls.clone = new fabric.Control({
//     x: -0.5,
//     y: -0.5,
//     offsetY: 50,
//     offsetX: -16,
//     cursorStyle: 'pointer',
//     mouseUpHandler: cloneObject,
//     render: renderIcon(cloneImg),
//     cornerSize: 24
// });
    
    
    function deleteObject(eventData, transform) {
        var target = transform.target;
        var canvas = target.canvas;
            canvas.remove(target);
        canvas.requestRenderAll();
    }

    // function cloneObject(eventData, transform) {
    //     var target = transform.target;
    //     var canvas = target.canvas;
    //     target.clone(function(cloned) {
    //       cloned.left += 10;
    //       cloned.top += 10;
    //       canvas.add(cloned);
    // });
    
    function renderIcon(ctx, left, top, styleOverride, fabricObject) {
    var size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(img, -size/2, -size/2, size, size);
    ctx.restore();
    }

  

const download = (canvas) => {
    const dataURL = canvas.toDataURL({
        width: canvas.width,
        height: canvas.height,
        left: 0,
        top: 0,
        format: 'png',
    });
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}

const download_noBackground = (canvas) => {
    console.log("second one")
    back = canvas.backgroundImage
    canvas.backgroundImage = null
    canvas.renderAll()
    const dataURL = canvas.toDataURL({
        width: canvas.width,
        height: canvas.height,
        left: 0,
        top: 0,
        format: 'png',
    });
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    canvas.backgroundImage = back
    canvas.renderAll()

}


const createCirc = (canvas) => {
    const newCirc = new fabric.Ellipse({
        rx: 100, ry: 100, stroke: canvas.freeDrawingBrush.color, strokeWidth: canvas.freeDrawingBrush.width,
        fill: 'rgba(0,0,0,0)'
    })
    canvas.add(newCirc)
    canvas.renderAll()

}

const createTri = (canvas) => {

    const newTri = new fabric.Triangle({
        width: 100, height: 100, stroke: canvas.freeDrawingBrush.color, strokeWidth: canvas.freeDrawingBrush.width,
        fill: 'rgba(0,0,0,0)'
    })
    canvas.add(newTri)
    canvas.renderAll()

}

const clearCanvas = (canvas) => {
    canvas.getObjects().forEach((o) => {
        if (o !== canvas.setBackgroundImage) {
            canvas.remove(o)
        }
    })
    canvas.renderAll()
}

// Add event listener to file input
document.getElementById('file-input').addEventListener('change', function (e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        var img = new Image();
        img.onload = function () {
            var imgInstance = new fabric.Image(img, {
                left: 0,
                top: 0,
                angle: 0,
                opacity: 0.85
            });
            // canvas.add(imgInstance);
            setBackgroundImage(imgInstance, canvas);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(file);

});


const updateStrokeWeight = (canvas, value) => {
    canvas.freeDrawingBrush.width = parseInt(value);
    updateStrokeWeightDisplay(value);
};

const updateStrokeWeightDisplay = (value) => {
    const strokeWeightDisplay = document.getElementById('stroke-weight');
    strokeWeightDisplay.textContent = value;
};


const undoShape = (canvas) => {
    const objArray = canvas.getObjects()
    if (objArray[objArray.length - 1] !== canvas.setBackgroundImage) {
        canvas.remove(objArray[objArray.length - 1])
    }

}

let addLineButton = document.getElementById('addLine');
addLineButton.addEventListener('click', activateAddLine);

let line;
let isDrawing = false;

function activateAddLine() {
    // Enable drawing mode for lines
    isDrawing = true;
    canvas.selection = false; // Disable selection of other objects while drawing lines

    // Add event listeners to handle line drawing
    canvas.on('mouse:down', startLine);
    canvas.on('mouse:move', extendLine);
    canvas.on('mouse:up', stopLine);
}

function startLine(event) {
    if (!isDrawing) return;

    let pointer = canvas.getPointer(event.e);
    let points = [pointer.x, pointer.y, pointer.x, pointer.y];
    line = new fabric.Line(points, {
        stroke: canvas.freeDrawingBrush.color,
        strokeWidth: canvas.freeDrawingBrush.width,
        selectable: false // Lines should not be selectable
    });
    canvas.add(line);
}

function extendLine(event) {
    if (!isDrawing) return;

    if (line) {
        let pointer = canvas.getPointer(event.e);
        line.set({ x2: pointer.x, y2: pointer.y });
        canvas.renderAll();
    }
}

function stopLine() {
    if (!isDrawing) return;

    line = null;
    canvas.off('mouse:down', startLine);
    canvas.off('mouse:move', extendLine);
    canvas.off('mouse:up', stopLine);

    isDrawing = false;
}

const setShapeColor = (picker, canvas) => {
    canvas.freeDrawingBrush.color = picker.toRGBAString()
    canvas.renderAll()
}

// Function to generate a random integer within a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random color
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
// Function to generate a random integer within a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random color
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Function to add a random shape to the canvas
function addRandomShape(canvas) {
    const shapeTypes = ['rect', 'circ', 'tri']; // Define available shape types
    const randomType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)]; // Select a random shape type

    let shape;
    switch (randomType) {
        case 'rect':
            shape = new fabric.Rect({
                width: getRandomInt(50, 200),
                height: getRandomInt(50, 200),
                left: getRandomInt(0, canvas.width - 200),
                top: getRandomInt(0, canvas.height - 200),
                selectable: true, // Make the shape selectable
                stroke: canvas.freeDrawingBrush.color,
                strokeWidth: getRandomInt(0, 20),
                fill: 'rgba(0,0,0,0)',
                objectCaching: false
            });
            break;
        case 'circ':
            shape = new fabric.Circle({
                radius: getRandomInt(25, 100),
                left: getRandomInt(0, canvas.width - 200),
                top: getRandomInt(0, canvas.height - 200),
                stroke: canvas.freeDrawingBrush.color,
                strokeWidth: getRandomInt(0, 20),
                fill: 'rgba(0,0,0,0)',
                objectCaching: false,
                selectable: true, // Make the shape selectable
            });
            break;
        case 'tri':
            shape = new fabric.Triangle({
                width: getRandomInt(50, 150),
                height: getRandomInt(50, 150),
                left: getRandomInt(0, canvas.width - 150),
                top: getRandomInt(0, canvas.height - 150),
                stroke: canvas.freeDrawingBrush.color,
                strokeWidth: getRandomInt(0, 20),
                fill: 'rgba(0,0,0,0)',
                objectCaching: false,
                selectable: true // Make the shape selectable
            });
            break;
    }

    canvas.add(shape); // Add the shape to the canvas
    canvas.renderAll(); // Render all objects on canvas
}

// Add event listener to the button
const addRandomShapeButton = document.getElementById('addRandomShape');
addRandomShapeButton.addEventListener('click', () => addRandomShape(canvas));

document.addEventListener("keydown", function(event) {
    // Check if the pressed key is "Delete"
    if (event.key === 'Delete') {
        // Perform your undo action here
        undoShape(canvas); // Assuming 'canvas' is your canvas object
    }
});


// var imageURL = "https://s1.1zoom.me/big0/152/Foxes_Black_background_Tongue_Snout_Screaming_523460_1280x853.jpg";
const canvas = initCanvas("canvas");

jscolor.trigger('input change');


canvas.renderAll()



