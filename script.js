// Theme toggle + persistence --------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("themeToggle");

  // Load stored theme if present
  const stored = localStorage.getItem("ddfa-theme");
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }

  function updateToggleLabel() {
    const theme = root.getAttribute("data-theme") || "dark";
    toggleBtn.textContent =
      theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode";
  }

  if (toggleBtn) {
    updateToggleLabel();

    toggleBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
      const next = current === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem("ddfa-theme", next);
      updateToggleLabel();
    });
  }

  // Signature progress bar ----------------------------------------------
  const currentEl = document.getElementById("sigCurrent");
  const goalEl = document.getElementById("sigGoal");
  const barFill = document.getElementById("sigBarFill");

  if (currentEl && goalEl && barFill) {
    const current = parseInt(currentEl.dataset.current || currentEl.textContent, 10) || 0;
    const goal = parseInt(goalEl.dataset.goal || goalEl.textContent, 10) || 1;
    const pct = Math.max(0, Math.min(100, (current / goal) * 100));

    // small delay so it animates after load
    requestAnimationFrame(() => {
      barFill.style.width = pct + "%";
    });
  }
});
