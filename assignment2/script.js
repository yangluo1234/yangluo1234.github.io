/*
Design concept: 
- For the tutorial video, users often repeat certain steps. 
  Therefore, I designed step jump buttons to allow users to quickly navigate to specific steps. 
  And for each step, I provided a title and short description to help users understand the content of each step. 
- I also added a like button to allow users to express their appreciation for the tutorial.

About the custom video player:
- Progress Bar: Visual indicator of video progress.
- Mute/Unmute: Make the sound mute/unmute.
- Fullscreen: Toggle fullscreen mode.
- Replay: Restart the video from the beginning.
- Like Button: Increment and display the number of likes.
- Fast Forward: Toggle between normal speed and double speed.

About the steps sections: 
- Step Jump Buttons: Buttons to jump to specific steps in the video.
- Step Information Display: Show the title and description of the current step. 
- Each button updates the video time and the step information display.
*/

/* /////////////////////////////
   Video Player Section
///////////////////////////// 
*/
// Select elements for player controls
const video = document.querySelector("#craft-video");

/* /////////////////////////////
   Control Buttons Section
///////////////////////////// 
*/
// Play/Pause button
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");

// Progress bar
const progressBar = document.querySelector("#progress-bar");

// Mute/Unmute button
const muteBtn = document.querySelector("#mute-unmute-btn");
const muteImg = document.querySelector("#mute-unmute-img");

// Fullscreen button
const fullscreenBtn = document.querySelector("#fullscreen-btn");
const fullscreenImg = document.querySelector("#fullscreen-img");

// Replay button
const replayBtn = document.querySelector("#replay-btn");

// Like button
const heartBtn = document.querySelector("#heart-btn");
const heartImg = document.querySelector("#heart-img");
// Likes count display
const likesDisplay = document.querySelector("#likes");

// Fast forward button
const fastForwardBtn = document.querySelector("#fast-forward-btn");

// Remove default controls
video.removeAttribute("controls");

// Update progress bar as video plays
video.addEventListener("timeupdate", updateProgressBar);

// Event listeners for Play/Pause button
playPauseBtn.addEventListener("click", togglePlayPause);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src =
      "https://img.icons8.com/ios-glyphs/30/ffffff/pause--v2.png";
  } else {
    video.pause();
    playPauseImg.src =
      "https://img.icons8.com/ios-glyphs/30/ffffff/play--v2.png";
  }
}

// Update progress bar
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

// Mute/Unmute button
muteBtn.addEventListener("click", toggleMute);
function toggleMute() {
  if (video.muted) {
    video.muted = false;
    muteImg.src =
      "https://img.icons8.com/ios-glyphs/30/ffffff/high-volume--v1.png";
  } else {
    video.muted = true;
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/ffffff/mute--v1.png";
  }
}

// Fullscreen button
fullscreenBtn.addEventListener("click", toggleFullscreen);
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// Replay button
replayBtn.addEventListener("click", replayVideo);
function replayVideo() {
  video.currentTime = 0;
  video.play();
}

// Like button and likes count
let likesCount = 0;
heartBtn.addEventListener("click", updateLikes);
function updateLikes() {
  likesCount++;
  likesDisplay.textContent = `Likes: ${likesCount}`;
}

// Fast forward button
fastForwardBtn.addEventListener("click", fastForward);
function fastForward() {
  if (video.playbackRate === 1.0) {
    video.playbackRate = 2.0;
  } else {
    video.playbackRate = 1.0;
  }
}

/* /////////////////////////////
          Steps section
///////////////////////////// */

// Elements for step info display
const stepTitle = document.querySelector("#step-title");
const stepText = document.querySelector("#step-text");

//Time markers for each step
const step1Time = 14;
const step2Time = 30;
const step3Time = 61;
const step4Time = 96;
const step5Time = 137;
const step6Time = 168;
const step7Time = 206;
const step8Time = 246;

// Each step content
// Titles and descriptions for each step
const step1Title = "Step 1 - Materials";
const step1Text =
  "Craft foam or card, pipe cleaner, stapler/glue dots or glue, hole punch, scissors, paper straws.";

const step2Title = "Step 2 - Square & Center";
const step2Text =
  "Cut a 12.5 cm square. Fold both ways to find the center and punch a hole where the creases meet.";

const step3Title = "Step 3 - Cut & Corner holes";
const step3Text =
  "Cut from each corner halfway toward the center. Punch a small hole in every other corner.";

const step4Title = "Step 4 - Fold Corners";
const step4Text =
  "Bring the holed corners into the middle and stick them down with glue dots, aligning the holes.";

const step5Title = "Step 5 - Make Foam Washers";
const step5Text =
  "Press a circle into scrap foam, cut two circles, and punch a center hole and these act as spacers.";

const step6Title = "Step 6 - Build The Spindle";
const step6Text =
  "Wrap a pipe cleaner around the straw to make a hub. Add a washer, feed through the sail, add the top washer, and secure.";

const step7Title = "Step 7 - Trim & Secure";
const step7Text =
  "Trim excess pipe cleaner and coil the end like a small snail to lock everything in place.";

const step8Title = "Step 8 - Test & Finish";
const step8Text =
  "Your pinwheel is ready! If it does not spin, it may be too tight. Create a tiny gap, tweak until it spins smoothly.";

// Function to update step info display
// Also highlights the active button
// Call this function when the step changes
// n is the step number from 1 to 8
// Update the step title and text based on the step number
// Then highlight the active button
// Remove all active classes first
// Then add active class to the current step button
function updateStepInfo(n) {
  switch (n) {
    case 1:
      stepTitle.textContent = step1Title;
      stepText.textContent = step1Text;
      break;
    case 2:
      stepTitle.textContent = step2Title;
      stepText.textContent = step2Text;
      break;
    case 3:
      stepTitle.textContent = step3Title;
      stepText.textContent = step3Text;
      break;
    case 4:
      stepTitle.textContent = step4Title;
      stepText.textContent = step4Text;
      break;
    case 5:
      stepTitle.textContent = step5Title;
      stepText.textContent = step5Text;
      break;
    case 6:
      stepTitle.textContent = step6Title;
      stepText.textContent = step6Text;
      break;
    case 7:
      stepTitle.textContent = step7Title;
      stepText.textContent = step7Text;
      break;
    case 8:
      stepTitle.textContent = step8Title;
      stepText.textContent = step8Text;
      break;
  }
  // Update active button styling
  document.querySelectorAll(".step-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  console.log("Step info updated to step " + n);
  // Highlight the active button
  const activeBtn = document.querySelector(`#step${n}-btn`);
  // Add active class if button exists
  if (activeBtn) {
    activeBtn.classList.add("active");
  }
  console.log("Active button set to step " + n);
}

// Event listeners for step jump buttons
const step1Btn = document.querySelector("#step1-btn");
const step2Btn = document.querySelector("#step2-btn");
const step3Btn = document.querySelector("#step3-btn");
const step4Btn = document.querySelector("#step4-btn");
const step5Btn = document.querySelector("#step5-btn");
const step6Btn = document.querySelector("#step6-btn");
const step7Btn = document.querySelector("#step7-btn");
const step8Btn = document.querySelector("#step8-btn");

// Add event listeners to each button
step1Btn.addEventListener("click", gotoStep1);
step2Btn.addEventListener("click", gotoStep2);
step3Btn.addEventListener("click", gotoStep3);
step4Btn.addEventListener("click", gotoStep4);
step5Btn.addEventListener("click", gotoStep5);
step6Btn.addEventListener("click", gotoStep6);
step7Btn.addEventListener("click", gotoStep7);
step8Btn.addEventListener("click", gotoStep8);

// Functions to jump to each step
function gotoStep1() {
  video.currentTime = step1Time;
  video.play();
  updateStepInfo(1);
}
function gotoStep2() {
  video.currentTime = step2Time;
  video.play();
  updateStepInfo(2);
}
function gotoStep3() {
  video.currentTime = step3Time;
  video.play();
  updateStepInfo(3);
}
function gotoStep4() {
  video.currentTime = step4Time;
  video.play();
  updateStepInfo(4);
}
function gotoStep5() {
  video.currentTime = step5Time;
  video.play();
  updateStepInfo(5);
}
function gotoStep6() {
  video.currentTime = step6Time;
  video.play();
  updateStepInfo(6);
}
function gotoStep7() {
  video.currentTime = step7Time;
  video.play();
  updateStepInfo(7);
}
function gotoStep8() {
  video.currentTime = step8Time;
  video.play();
  updateStepInfo(8);
}
