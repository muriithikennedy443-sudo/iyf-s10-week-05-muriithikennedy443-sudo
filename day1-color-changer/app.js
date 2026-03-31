const btn = document.getElementById("change-btn");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn.addEventListener("click", () => {
  const headings = document.querySelectorAll("h1, h2, h3");
  headings.forEach(heading => {
    heading.style.color = getRandomColor();
  });
});