/* ------------------------------------------------------
   DDFA Landing Page — Script.js
   Handles:
     • Signature Progress Animation
     • Smooth Counter Increase
   ------------------------------------------------------ */

// CONFIG — Update these manually as petition grows
const SIG_CURRENT = 5;     // Number of signatures right now
const SIG_GOAL = 5000;     // Goal (can be any #)

// DOM ELEMENTS
const elCurrent = document.getElementById("sigCurrent");
const elGoal = document.getElementById("sigGoal");
const elBar = document.querySelector(".sig-bar-fill");

// Safety checks (prevents errors if elements not found)
if (elCurrent && elGoal) {
  elCurrent.textContent = SIG_CURRENT.toLocaleString();
  elGoal.textContent = SIG_GOAL.toLocaleString();
}

// Animate Progress Bar
function animateProgressBar() {
  if (!elBar) return;

  const pct = Math.min(SIG_CURRENT / SIG_GOAL, 1) * 100;

  // Delay start for a smoother experience
  setTimeout(() => {
    elBar.style.width = pct + "%";
  }, 300);
}

// Optional: Smooth count-up animation
function animateCounter() {
  if (!elCurrent) return;

  let start = 0;
  const end = SIG_CURRENT;
  const duration = 900;
  const stepTime = Math.max(Math.floor(duration / end), 20);

  const counter = setInterval(() => {
    start++;
    elCurrent.textContent = start.toLocaleString();
    if (start >= end) clearInterval(counter);
  }, stepTime);
}

// Run animations on load
window.addEventListener("DOMContentLoaded", () => {
  animateProgressBar();
  animateCounter();
});
