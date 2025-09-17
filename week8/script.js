const videoList = [
  { id: 1, src: "stardust.mp4" },
  { id: 2, src: "zenscape.mp4" },
  {
    id: 3,
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
  },
];
//First course of action: get access to the video.
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

//play pause login
// 1. get access to the right button
// 2.  add eventlistener for the click on this button
// 3. write the callback function that needs to play or pause the video

//1.get access to the progress bar
const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

//2/add eventlistener to the video for timeupdate
myVideo.addEventListener("timeupdate", updateProgress);

//3.write the callback function that updates the progress bar
function updateProgress() {
  const duration = (myVideo.currentTime / myVideo.duration) * 100;
  console.log(duration);
  progressBar.style.width = duration + "%";
}
// 1. get access to the right button
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

// 2.  add eventlistener for the click on this button
playPauseButton.addEventListener("click", togglePlayback);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// 3. write the callback function that needs to play or pause the video
function togglePlayback() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleAudio);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleAudio() {
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    myVideo.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}

const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);

stardustButton.addEventListener("click", function chooseVideo() {
  playVideo(0);
});

const zenscapeButton = document.querySelector("#zenscape-vid-button");
console.log(zenscapeButton);

zenscapeButton.addEventListener("click", function chooseVideo() {
  playVideo(1);
});

const musicVideoButton = document.querySelector("#musicvideo-vid-button");
console.log(musicVideoButton);

musicVideoButton.addEventListener("click", function chooseVideo() {
  playVideo(2);
});

function playVideo(no) {
  myVideo.src = videoList[no].src;
  console.log(myVideo.src);
  myVideo.load();
  myVideo.play();
}

const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", toggleFullscreen);
myVideo.addEventListener("dblclick", toggleFullscreen);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

heartButton.addEventListener("click", updateLikes);

const likesContainer = document.querySelector("#likes");
let likes = 0;

function updateLikes() {
  likes++;
  likesContainer.textContent = likes;
}

const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

step1Button.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 16.0;
}

const step2Button = document.querySelector("#step2-button");
console.log(step2Button);

step2Button.addEventListener("click", gotoStep2);

function gotoStep2() {
  myVideo.currentTime = 43.0;
}

const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

fastForwardButton.addEventListener("click", fastForward);

function fastForward() {
  if (myVideo.playbackRate === 1.0) {
    myVideo.playbackRate = 2.0;
  } else {
    myVideo.playbackRate = 1.0;
  }
}
