const toggleBtn = document.getElementById("toggle-btn");

// Check saved preference on page load
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️ Switch to Light Mode";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  // Update button text
  toggleBtn.textContent = isDark
    ? "☀️ Switch to Light Mode"
    : "🌙 Switch to Dark Mode";

  // Save preference
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");

  console.log("Dark mode:", isDark ? "ON" : "OFF");
});