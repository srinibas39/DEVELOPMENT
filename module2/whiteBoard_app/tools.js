let undo = document.querySelector("#undo");
undo.addEventListener("click",undoLine);

function undoLine(e){
   linesDB.pop();
   ctx.clearRect(0,0,canvas.width,canvas.height);
   drawLines(linesDB);
}
function drawLines(linesDB){
  for(let i=0;i<linesDB.length;i++){
      let line=linesDB[i];
      for(let j=0;j<line.length;j++){
           let pointObject=line[j];
           if(pointObject.type=="md"){
               ctx.beginPath();
               ctx.moveTo(pointObject.x,pointObject.y);
           }
           else{
            
            ctx.lineTo(pointObject.x,pointObject.y);
            ctx.stroke();
           }
      }
  }
  
}