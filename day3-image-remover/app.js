const removeBtn = document.getElementById("remove-btn");
const toggleBtn = document.getElementById("toggle-btn");
let hidden = false;

// Remove all images permanently
removeBtn.addEventListener("click", () => {
  const images = document.querySelectorAll("img");
  images.forEach(img => img.remove());
  console.log("All images removed!");
});

// Bonus: Toggle hide/show
toggleBtn.addEventListener("click", () => {
  const images = document.querySelectorAll("img");
  hidden = !hidden;
  images.forEach(img => {
    img.style.display = hidden ? "none" : "inline";
  });
  console.log(hidden ? "Images hidden" : "Images shown");
});