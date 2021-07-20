let sticky = document.querySelector("#sticky");


sticky.addEventListener("click", function(e){
    stickyDisplay();
});




function stickyDisplay(img) {
    let stickyDiv = document.createElement("div");
    stickyDiv.classList.add("sticky");
    stickyDiv.innerHTML = `<div class="sticky-header">
    <div class="sticky-close"></div>
    <div class="sticky-minimise"></div>`;

    let stickyMinimise = stickyDiv.querySelector(".sticky-minimise");
    let stickyClose = stickyDiv.querySelector(".sticky-close");
    let stickyHeader = stickyDiv.querySelector(".sticky-header");
    let stickyContent;
   
     if(img){
         let stickyImgDiv= document.createElement("div");
         stickyImgDiv.classList.add("sticky-content");
         stickyImgDiv.append(img);
         stickyDiv.append(stickyImgDiv);
        stickyContent=stickyImgDiv;
         
     }
     else{
        //<div class="sticky-content" contentEditable="true" spellcheck="false"></div>;
       let stickyContentDiv =document.createElement("div");
       stickyContentDiv.classList.add("sticky-content");
       stickyContentDiv.setAttribute("contentEditable","true");
       stickyContentDiv.setAttribute("spellCheck","false");
       stickyDiv.append(stickyContentDiv)
       stickyContent=stickyContentDiv 
     }


    stickyMinimise.addEventListener("click", function (e) {

        stickyContent.style.display == "none" ?
         (stickyContent.style.display = "block") : 
         (stickyContent.style.display = "none");
    });

    stickyClose.addEventListener("click", function (e) {
        stickyDiv.remove();
    });


    //displacement of stickyNotes

    let stickyHold = false;
    let initialX;
    let initialY;
    stickyHeader.addEventListener("mousedown", function (e) {
        stickyHold=true;
        initialX = e.clientX;
        initialY = e.clientY;
    });
  
    stickyHeader.addEventListener("mousemove", function (e) {
        if(stickyHold){
            let finalX = e.clientX;
            let finalY = e.clientY;
      
            let dx = finalX - initialX;
            let dy = finalY - initialY;
      
            let {top , left} = stickyDiv.getBoundingClientRect();
            //   sticky => top + dy
            //  sticky => left + dx
            stickyDiv.style.top = top + dy + "px";
            stickyDiv.style.left = left +dx + "px";
      
            initialX = finalX;
            initialY = finalY;
        }
    });
  
    stickyHeader.addEventListener("mouseup", function (e) {
        stickyHold = false;
    });
  
    document.body.append(stickyDiv);
}
 