let imageDiv=document.querySelector("#photo");
let input=document.querySelector("#photo-upload");

imageDiv.addEventListener("click",function(e){
    input.click();
})

imageDiv.addEventListener("change",function(e){
    let fileObject=e.target.files[0];// the file object
    let filePath=URL.createObjectURL(fileObject);
    //console.log(filePath);
    let img=document.createElement("img");
    img.setAttribute("src",filePath);
    stickyDisplay(img);

    
})

