console.log("index.js");


const initCanvas = (id) => {
    return new fabric.Canvas(id, {
        width: 500, height: 500, backgroundColor: "red"
    });
}

const setBackgroundImage = (url, canvas) => {
    canvas.setBackgroundImage(url, canvas.renderAll.bind(canvas), {
        backgroundImageOpacity: 1,
        originX: "left",
        originY: "top",
        left: 0,
        scaleX: .5,
        scaleY: .5,
    });
}
const createRect = (canvas) => {
    const newRect = new fabric.Rect({
        width: 100, height: 100, stroke: 'red',
        fill: 'rgba(0,0,0,0)', top: 0, left: 0
    })
    canvas.add(newRect)
    canvas.renderAll()

}

const createCirc = (canvas) => {
    const newCirc = new fabric.Ellipse({
        rx: 100, ry: 100, stroke: 'red',
        fill: 'rgba(0,0,0,0)'
    })
    canvas.add(newCirc)
    canvas.renderAll()

}

const createTri = (canvas) => {
    const newTri = new fabric.Triangle({
        width: 100, height: 100, stroke: canvas.backgroundColor,
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


// This code sets the background image
// var imageURL = "https://s1.1zoom.me/big0/152/Foxes_Black_background_Tongue_Snout_Screaming_523460_1280x853.jpg";
 const canvas = initCanvas("canvas");

// setBackgroundImage(imageURL, canvas);
canvas.renderAll();

// Add event listener to file input
document.getElementById('file-input').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        var img = new Image();
        img.onload = function() {
            var imgInstance = new fabric.Image(img, {
                left: 100,
                top: 100,
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
    const picker = document.getElementById("colorPicker")
    picker.addEventListener("change", (event) => {
        color = event.target.value
        console.log(color)
        canvas.backgroundColor = color
        canvas.renderAll()

    })
}
var imageURL = "https://s1.1zoom.me/big0/152/Foxes_Black_background_Tongue_Snout_Screaming_523460_1280x853.jpg";
const canvas = initCanvas("canvas");


setBackgroundImage(imageURL, canvas);
canvas.renderAll();
setColorListener();


