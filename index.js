console.log("index.js");


const initCanvas = (id) => {
    return new fabric.Canvas(id, {
        width: 500, height: 500,
    });
}

const setBackgroundImage = (url, canvas) => {
    canvas.setBackgroundImage(url, canvas.renderAll.bind(canvas), {
        backgroundImageOpacity: 1,
        originX: "left",
        originY: "top",
        left: 70,
        scaleX: .5,
        scaleY: .5,
    });
}
var imageURL = "https://s1.1zoom.me/big0/152/Foxes_Black_background_Tongue_Snout_Screaming_523460_1280x853.jpg";
const canvas = initCanvas("canvas");

setBackgroundImage(imageURL, canvas);
canvas.renderAll();

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
        width: 100, height: 100, stroke: 'red',
        fill: 'rgba(0,0,0,0)'
    })
    canvas.add(newTri)
    canvas.renderAll()

}