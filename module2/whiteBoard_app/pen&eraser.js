let pen=document.querySelector("#pen");
let eraser=document.querySelector("#eraser");
let penOption=pen.querySelector(".tools-option");
let eraserOption=eraser.querySelector(".tools-option");
let penSize=penOption.querySelector("#pensize");
let penColors=penOption.querySelectorAll(".pen-colors div");
let eraserSize=eraserOption.querySelector("#erasersize");


let currentPenSize=1;
let currentPenColor="black";
let currentEraserSize=1;

pen.addEventListener("click",function(e){
  if(pen.classList.contains("active-tool")){
     //pen is already clicked
     if(penOption.classList.contains("hide")){
        penOption.classList.remove("hide");
     }
     else{
         penOption.classList.add("hide")
     }
     
      
  }
  else{
      //eraser is clicked
      eraser.classList.remove("active-tool");
      eraser.classList.add("fade");
      eraserOption.classList.add("hide");
      //pen is not clicked
      pen.classList.remove("fade");
      pen.classList.add("active-tool");

      ctx.lineWidth=currentPenSize;
      ctx.strokeStyle=currentPenColor;
  }
})
eraser.addEventListener("click",function(e){
    if(eraser.classList.contains("active-tool")){
       if(eraserOption.classList.contains("hide")){
        eraserOption.classList.remove("hide");
       } 
       else{
           eraserOption.classList.add("hide")
       }
    
    }
    else{
        pen.classList.remove("active-tool");
        pen.classList.add("fade");
        penOption.classList.add("hide");

        
        eraser.classList.remove("fade");
        eraser.classList.add("active-tool");

        ctx.lineWidth=currentEraserSize;
        ctx.strokeStyle="white";

    }
})
penSize.addEventListener("change",function(e){
     let penSizeValue=penSize.value;
     //console.log(penSizeValue);
     currentPenSize=penSizeValue;
     ctx.lineWidth=currentPenSize;

})

for(let i=0;i<penColors.length;i++){
    penColors[i].addEventListener("click",function(e){
        let penColor=e.target.className;
        currentPenColor=penColor;
        ctx.strokeStyle=currentPenColor;
    })
}
   
eraserSize.addEventListener('change',function(e){
     let eraserSizeValue=eraserSize.value;
     console.log(eraserSizeValue);
     ctx.strokeStyle="white";
     currentEraserSize=eraserSizeValue;
     ctx.lineWidth=currentEraserSize;
})