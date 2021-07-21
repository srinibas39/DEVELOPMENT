let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 100;
//there will be issues by increasing canvas width  and heightthrough CSS
window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;
    drawLines(linesDB);
})


//ctx.fillStyle="green";
//ctx.fillRect(10,10,150,100);//(x-offset(left margin),y-offset(top margin),width,height)
let isPenDown = false;
let line = [];
let linesDB = [];
let redoLineDB=[];

canvas.addEventListener("mousedown", function(e) {
    if(redoLineDB.length){
        redoLineDB=[];
    }
    isPenDown = true;
    let x = e.clientX;
    let y = e.clientY - 100;
    ctx.beginPath();
    ctx.moveTo(x, y);
    let pointObject = {
        x: x,
        y: y,
        type: "md",
        lineWidth:ctx.lineWidth,
        strokeStyle:ctx.strokeStyle
    }
    line.push(pointObject);

})
canvas.addEventListener("mousemove", function(e) {
    
    if (isPenDown) {
        let x = e.clientX;
        let y = e.clientY - 100;
        ctx.lineTo(x, y);
        ctx.stroke();
        let pointObject = {
            x: x,
            y: y,
            type: "mm"
        }
        line.push(pointObject);
    }

})
canvas.addEventListener("mouseup", function(e) {
    isPenDown = false;
    linesDB.push(line);
    line = [];
})