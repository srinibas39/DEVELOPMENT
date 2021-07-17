let undo = document.querySelector("#undo");
undo.addEventListener("click", undoLine);
let redo = document.querySelector("#redo");
redo.addEventListener("click", redoLine);
function undoLine(e) {
    if (linesDB.length) {
        let poppedLine = linesDB.pop();
        redoLineDB.push(poppedLine);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawLines(linesDB);

    }

}
function redoLine(e) {
    if (redoLineDB.length) {
        let redoLine = redoLineDB.pop();
        linesDB.push(redoLine);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawLines(linesDB)

    }


}

function drawLines(linesDB) {
    for (let i = 0; i < linesDB.length; i++) {
        let line = linesDB[i];
        for (let j = 0; j < line.length; j++) {
            let pointObject = line[j];
            if (pointObject.type == "md") {
                ctx.beginPath();
                ctx.moveTo(pointObject.x, pointObject.y);
            }
            else {

                ctx.lineTo(pointObject.x, pointObject.y);
                ctx.stroke();
            }
        }
    }

}
