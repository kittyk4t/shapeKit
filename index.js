


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
const createRect = (canvas) => {
    const newRect = new fabric.Rect({
        width: 100, height: 100, stroke: canvas.freeDrawingBrush.color, strokeWidth: canvas.freeDrawingBrush.width,
        fill: 'rgba(0,0,0,0)', top: 0, left: 0
    })
    canvas.add(newRect)
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
    console.log(canvas.freeDrawingBrush.width)
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

const decreaseStroke = (canvas) => {
    canvas.freeDrawingBrush.width = canvas.freeDrawingBrush.width - 1
}

const increaseStroke = (canvas) => {
    canvas.freeDrawingBrush.width = canvas.freeDrawingBrush.width + 1

}
// this code allows you to add an image on top of the background image

// // Add event listener to file input
// document.getElementById('image-input').addEventListener('change', function(e) {
//     var file = e.target.files[0];
//     var reader = new FileReader();
//     reader.onload = function(event) {
//         var img = new Image();
//         img.onload = function() {
//             var imgInstance = new fabric.Image(img, {
//                 left: 100,
//                 top: 100,
//                 angle: 30,
//                 opacity: 0.85
//             });
//             canvas.add(imgInstance);
//         }
//         img.src = event.target.result;
//     }
//     reader.readAsDataURL(file);
// });

const setColorListener = () => {
    const picker = document.getElementById('colorPicker')
    picker.addEventListener('onchange', (event) => {
        console.log(event.target.value)
        newColor = "#" + event.target.value

        canvas.freeDrawingBrush.color = color
        canvas.renderAll()

    })
}
// var imageURL = "https://s1.1zoom.me/big0/152/Foxes_Black_background_Tongue_Snout_Screaming_523460_1280x853.jpg";
const canvas = initCanvas("canvas");

canvas.renderAll()
setColorListener()


