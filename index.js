console.log("index.js");

const canvas = new fabric.Canvas("canvas", {
    width: 500, height: 500,
});
var imageURL = "https://s1.1zoom.me/big0/152/Foxes_Black_background_Tongue_Snout_Screaming_523460_1280x853.jpg";
canvas.setBackgroundImage(imageURL, canvas.renderAll.bind(canvas), {
    backgroundImageOpacity: 1,
    originX: "left",
    originY: "top",
    left: 70,
    scaleX: .5,
    scaleY: .5,
});

canvas.add(new fabric.Rect({
    left: 100,
    top: 100,
    stroke: 'red',
    fill: 'rgba(0,0,0,0)',
    width: 20,
    height: 20,
    angle: 45
}))

canvas.renderAll();