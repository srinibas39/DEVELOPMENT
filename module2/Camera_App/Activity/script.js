let videoElement = document.querySelector("video");
let recordButton = document.querySelector(".videoR");
let captureButton=document.querySelector(".videoC");
let mediaRecorder;
let recording = false;

// let constraint={video:true};
// navigator.mediaDevices.getUserMedia(constraint).then(function(mediaStream){
//     console.log(mediaStream);
//     videoElement.srcObject=mediaStream;
// })
// .catch(function(err){
//     console.log(err);
// })

(async function () {
    let constraint = { video: true };
    let mediaStream = await navigator.mediaDevices.getUserMedia(constraint);
    videoElement.srcObject = mediaStream;
    mediaRecorder = new MediaRecorder(mediaStream);

    mediaRecorder.onstart = function () {
        console.log("video has been started");
        recordButton.classList.add("animate-recording")

    }
    mediaRecorder.ondataavailable = function (e) {
        // console.log(e.data);
        recordButton.classList.remove("animate-recording")
        console.log("inside on data available");
        let videoData = new Blob([e.data], { type: "video/mp4" });
        console.log(videoData);
        let videoURL=URL.createObjectURL(videoData);
        let aTag = document.createElement("a");
        aTag.href = videoURL;
        aTag.download = `video${Date.now()}.mp4`;
        aTag.click();
    }
    mediaRecorder.onstop = function () {
        console.log("video stop");
    }

    recordButton.addEventListener("click", function (e) {
        if (recording) {
            //stop the recording
            mediaRecorder.stop();
            // recordButton.innerHTML="Record";
            recording = false;

        }
        else {
            //start the recording
            mediaRecorder.start();
            // recordButton.innerHTML = "Recording...";
            recording = true;
        }
    })

    captureButton.addEventListener("click",function(){
        // let canvas=document.querySelector("#canvas");
        captureButton.classList.add("animate-capture");
        setTimeout(function(){
            captureButton.classList.remove("animate-capture");
        },1000)
        let canvas=document.createElement("canvas");
        //set canvas height and width
        canvas.height=640;
        canvas.width=800;
        let ctx=canvas.getContext('2d');
        ctx.drawImage(videoElement,0,0);
        let aTag=document.createElement("a");
        aTag.href=canvas.toDataURL("Image/jpg");;
        aTag.download=`Image${Date.now()}.jpg`;
        aTag.click();

    })



})();