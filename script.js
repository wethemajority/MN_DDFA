// Theme toggle
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("ddfa-theme", theme);
}

const storedTheme = localStorage.getItem("ddfa-theme");
if (storedTheme === "light" || storedTheme === "dark") {
  setTheme(storedTheme);
}

themeToggle?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

// Signature widget animation
const currentEl = document.getElementById("sigCurrent");
const barEl = document.getElementById("sigBarFill");
const goalEl = document.getElementById("sigGoal");

if (currentEl && barEl && goalEl) {
  const target = parseInt(currentEl.dataset.targetCount || currentEl.textContent || "0", 10);
  const goal = parseInt(goalEl.textContent || "1", 10);
  const pct = Math.max(2, Math.min(100, Math.round((target / goal) * 100)));
  barEl.style.width = pct + "%";
}
