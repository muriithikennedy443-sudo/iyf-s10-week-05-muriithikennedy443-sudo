const copyBtn = document.getElementById("copy-btn");
const source = document.getElementById("source");
const target = document.getElementById("target");

copyBtn.addEventListener("click", () => {
  target.innerHTML = source.innerHTML;
  console.log("Content copied from source to target!");
});