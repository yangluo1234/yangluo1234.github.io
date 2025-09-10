//I should also access the audio so that I can control with my button
const myAudio = document.querySelector("#my-audio");
console.log(myAudio);

//I need to access the play button
const playButton = document.querySelector("#play-button");
console.log(playButton);

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", function () {
  myAudio.pause();
});

// let us add a click event listenser so that whenever I click the button, the audio plays
playButton.addEventListener("click", function () {
  myAudio.play();
});

//my logic for creating a poping sound effect
//first i need to access the button
const popButton = document.querySelector("#pop-button");
console.log(popButton);

//then I need to access the audio
const popSound = document.querySelector("#pop-sound");
console.log(popSound);

//then I need to add a click event listener to the button so that whenever I click the button, the sound plays
popButton.addEventListener("click", function () {
  popSound.play();
});

//-------------------------------------------------------------------------//
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const videoPlayButton = document.querySelector("#play-video-button");
console.log(videoPlayButton);

const videoPauseButton = document.querySelector("#pause-video-button");
console.log(videoPauseButton);

videoPauseButton.addEventListener("click", function () {
  myVideo.pause();
});

videoPlayButton.addEventListener("click", function () {
  myVideo.play();
});
