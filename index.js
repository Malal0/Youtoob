///////////////////////////////////////////////////////////////////////////////
//                  VARIABLES
///////////////////////////////////////////////////////////////////////////////

const videoPlayer = document.getElementById("video-player");
const video = document.getElementById("video");
const progress = document.getElementById("progress");

///////////////////////////////////////////////////////////////////////////////
//                  FUNCTIONS
///////////////////////////////////////////////////////////////////////////////

function handleClick(e) {
    const id = e.target.id;

    if (id === "play") {
        video.play();
        if (video.playbackRate !== 1)
            video.playbackRate = 1;
        console.log("play");
    } else if (id === "pause") {
        video.pause();
        console.log("pause");
    } else if (id === "stop") {
        video.pause(); // stops video
        video.currentTime = 0; // resets time to  0
        console.log("stop");
    } else if (e.target.dataset.speed) {
        video.playbackRate = Number(e.target.dataset.speed);
        console.log(`fast foward ${e.target.dataset.speed}`);
    } else if (e.target.dataset.skip) {
        video.currentTime += Number(e.target.dataset.skip);
        console.log(`current time: ${video.currentTime}`);
    } else if (id === "loop") {
        video.loop = video.loop ? false : true;
        console.log("loop");
        console.log(video.loop);
    } else if (id === "widescreen") {
        videoPlayer.classList.toggle("widescreen");
        console.log("widescreen");
    } else if (id === "fullscreen") {
        openFullscreen();
        console.log("fullscreen");
    }
}

function openFullscreen() {
    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
    } else if (videoPlayer.webkitRequestFullscreen) { /* Safari */
        videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) { /* IE11 */
        videoPlayer.msRequestFullscreen();
    }
}

function handleProgress() {
    const currentTime = video.currentTime;
    const fullTime = video.duration;
    const width = (currentTime / fullTime) * 100;
    console.log(width);
    progress.style.width = `${width}%`;
}

///////////////////////////////////////////////////////////////////////////////
//                  EVENT LISTENERS
///////////////////////////////////////////////////////////////////////////////

document.addEventListener("click", handleClick);
video.addEventListener("timeupdate", handleProgress);