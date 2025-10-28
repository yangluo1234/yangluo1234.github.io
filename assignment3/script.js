/* ===================== Flip and Scratch Logic ===================== 
------------Overview------------------:
This project lets user flip and scratch cards. When a card is clicked,
it flips to reveal a siliver coat. The user can then "scratch" off the coat,
revealing the positive message and a small illustration underneath with sound effects.

// The interaction uses the HTML5 canvas for the scratch effects, and 
CSS 3D tansforms for the flip animation. The "destination-out" mode is used
on the canvas to create the easing effect when the user scratches the surface, which is 
adapted from a tutorial on Tuts+ Web Design. 

//Audio feedback is provided for flipping, scratching, and revealing the message, which 
enhances the user experience. 

------------Why this project?------------------:
I want to design something that feels lucky, playful, and rewarding. The flip and scratch
actions encourage curiosity and physical enagement, while the short positive messages gie 
a small boost of joy. Using JavaScript and sound effects helps show how 
interaction design can support emotion and motivation in digital experiences.

------------How this project works------------------:
1. Each card listens for click events to trigger the flip animation
2. When flipped, a canvas element is initialized with a silver coat
3. Pointer events on the canvas allow the user to "scratch" off the coat
4. The amount scratched is tracked, and once a threshold(40% threshold) is reached,
   the coat is fully cleared to reveal the message underneath
5. Sound effects play at each interaction step for feedback

-----Reference------

 Tuts+ Web Design 2024,
   "How to Create a Scratch Card Effect in Vanilla JavaScript",
   viewed 20 October 2025,
<https://webdesign.tutsplus.com/how-to-create-a-scratch-card-effect-in-vanilla-javascript--cms-108922t>

// Audio: flip.mp3 — "flipCard" by Splashdust (Freesound), Pixabay, 
// free for use under Pixabay Content License, viewed 20 Oct 2025,
// <https://pixabay.com/sound-effects/flipcard-91468/>

// Audio: lucky-sound.mp3 — "Lucky Guitar Sound" by SergeQuadrado, Pixabay,
// free for use under Pixabay Content License, viewed 20 Oct 2025,
// <https://pixabay.com/sound-effects/lucky-guitar-sound-379745/>

// Audio: scratch-sound.mp3 — "Pencil Crayon Foley Coloring 3" by floraphonic,
// Pixabay, free for use under Pixabay Content License, viewed 20 Oct 2025,
// <https://pixabay.com/sound-effects/pencil-crayon-foley-coloring-3-200910/>

*/

// ===================== Flip and Scratch Logic =====================
// ----- Select elements -----
//select all cards and audio elements
// Get all card elements
// Get audio elements
const cards = document.querySelectorAll(".card");
const flipSound = document.getElementById("flip-sound");
const revealSound = document.getElementById("lucky-sound");
const scratchSound = document.getElementById("scratch-sound");

// ----- Flip logic -----
// Add click event listeners to each card
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    // Skip if clicking on canvas (scratching)
    if (e.target.classList.contains("coat")) return;

    // Close other flipped cards
    cards.forEach((c) => {
      if (c !== card) c.classList.remove("flip");
    });
    // Toggle flip state
    const opening = !card.classList.contains("flip");
    card.classList.toggle("flip");

    // Play flip sound
    if (opening && flipSound) {
      flipSound.currentTime = 0;
      flipSound.play().catch(() => {});
    }

    // Init scratch layer
    // Only initialize if the card is flipped open
    // This prevents re-initialization on closing
    if (card.classList.contains("flip")) {
      const canvas = card.querySelector(".coat");
      initCoat(canvas);
      enableScratch(canvas);
    }
  });
});

// ----- Paint silver coat -----
// Initialize the scratch coat on the canvas
// with a silver color and set up for erasing
// when scratched
// ----- Initialize coat -----
function initCoat(canvas) {
  const stage = canvas.parentElement;
  const w = stage.clientWidth;
  const h = stage.clientHeight;
  const ctx = canvas.getContext("2d");
  // Set canvas size to match stage
  canvas.width = w;
  canvas.height = h;

  // using destination-out for erasing effect
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "#c6cbd3";
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = "destination-out"; // erase mode

  // Reset canvas styles
  canvas.style.opacity = "1";
  canvas.style.pointerEvents = "auto";
}

// ----- Scratch interaction -----
// Enable scratching on the canvas
// by handling pointer events
function enableScratch(canvas) {
  const ctx = canvas.getContext("2d");
  let drawing = false;
  let lastX = 0,
    lastY = 0;
  // Pointer event handlers
  // Start drawing on pointer down
  canvas.addEventListener("pointerdown", (e) => {
    drawing = true;
    const r = canvas.getBoundingClientRect();
    lastX = e.clientX - r.left;
    lastY = e.clientY - r.top;
    drawCircle(ctx, lastX, lastY);

    if (scratchSound) {
      scratchSound.currentTime = 0;
      scratchSound.play().catch(() => {});
    }
  });

  canvas.addEventListener("pointermove", (e) => {
    if (!drawing) return;
    const r = canvas.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    drawLine(ctx, lastX, lastY, x, y);
    lastX = x;
    lastY = y;
  });

  const stopDraw = () => {
    if (!drawing) return;
    drawing = false;
    if (scratchSound) scratchSound.pause();
    // Check reveal progress after drawing stops (40% threshold)
    checkReveal(canvas, 0.4);
  };

  canvas.addEventListener("pointerup", stopDraw);
  canvas.addEventListener("pointerleave", stopDraw);
}

// ----- Drawing  -----
// Draw a filled circle at (x, y)
// Draw a line from (x1, y1) to (x2, y2)
// using small circles for smoothness
// ----- Draw circle -----
function drawCircle(ctx, x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 15, 0, Math.PI * 2);
  ctx.fill();
}
// ----- Draw line -----
// Draw line by interpolating small circles
// between start and end points
function drawLine(ctx, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy);
  const steps = Math.ceil(dist / 5);
  for (let i = 0; i < steps; i++) {
    const x = x1 + (dx * i) / steps;
    const y = y1 + (dy * i) / steps;
    drawCircle(ctx, x, y);
  }
}

// Check how much of the coat has been scratched off
// If the cleared area exceeds the threshold,
// reveal the answer by clearing the coat
// ----- Check reveal -----
function checkReveal(canvas, threshold) {
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;
  const data = ctx.getImageData(0, 0, width, height).data;

  let cleared = 0;
  const total = data.length / 4;

  for (let i = 3; i < data.length; i += 4) {
    if (data[i] === 0) cleared++;
  }
  // Calculate cleared ratio
  // If above threshold, reveal answer
  // by clearing the coat
  // and play reveal sound
  // Also add a brief highlight effect to the card
  const ratio = cleared / total;
  if (ratio >= threshold) {
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillRect(0, 0, width, height);
    canvas.style.transition = "opacity .4s ease";
    canvas.style.opacity = "0";
    canvas.style.pointerEvents = "none";

    if (revealSound) {
      revealSound.currentTime = 0;
      revealSound.play().catch(() => {});
    }
  }
}
