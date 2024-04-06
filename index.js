console.log("index.js");

const canvas = new fabric.Canvas("canvas", {
    width: 500, height: 500,
    backgroundColor: 'purple'
});
canvas.add(new fabric.Rect({
    left: 100,
    top: 100,
    fill: 'red',
    width: 20,
    height: 20,
    angle: 45
}))
canvas.renderAll();