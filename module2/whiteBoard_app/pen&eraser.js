let pen=document.querySelector("#pen");
let eraser=document.querySelector("#eraser");
let penOption=pen.querySelector(".tools-option");
let eraserOption=eraser.querySelector(".tools-option");

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
      pen.classList.add("active-tool")
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

    }
})