const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark") {
    document.documentElement.dataset.theme = "dark";
  }

  const updateThemeButton = () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    themeToggle.querySelector("span").textContent = isDark ? "☀" : "☾";
  };

  updateThemeButton();
  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    document.documentElement.dataset.theme = isDark ? "light" : "dark";
    localStorage.setItem("portfolio-theme", isDark ? "light" : "dark");
    updateThemeButton();
  });
}
