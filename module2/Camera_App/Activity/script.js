let videoElement = document.querySelector("video");
let recordButton = document.querySelector("#record");
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
    let constraint = { video: true, audio:true };
    let mediaStream = await navigator.mediaDevices.getUserMedia(constraint);
    videoElement.srcObject = mediaStream;
    mediaRecorder = new MediaRecorder(mediaStream);

    mediaRecorder.onstart = function () {
        console.log("video has been started");
    }
    mediaRecorder.ondataavailable = function (e) {
        // console.log(e.data);
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
            recordButton.innerHTML="Record";
            recording = false;

        }
        else {
            //start the recording
            mediaRecorder.start();
            recordButton.innerHTML = "Recording...";
            recording = true;
        }
    })



})();