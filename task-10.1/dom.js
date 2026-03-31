// Task 10.1: Event Listeners

//  Exercise 1: Basic Events 

// Create button and add to page
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// Anonymous function
button.addEventListener("click", function() {
  console.log("Button clicked! (anonymous)");
});

// Arrow function
button.addEventListener("click", () => {
  console.log("Clicked again! (arrow function)");
});

// Named function 
function handleClick() {
  console.log("Handled! (named function)");
}
button.addEventListener("click", handleClick);

//  Exercise 2: Event Types 

const element = document.querySelector(".container");
const input = document.querySelector('input[type="text"]');
const form = document.querySelector("#contact-form");

// Mouse events
element.addEventListener("click", () => {
  console.log("Mouse: clicked");
});

element.addEventListener("dblclick", () => {
  console.log("Mouse: double clicked");
});

element.addEventListener("mouseenter", () => {
  console.log("Mouse: entered element");
});

element.addEventListener("mouseleave", () => {
  console.log("Mouse: left element");
});

element.addEventListener("mousemove", () => {
  console.log("Mouse: moving over element");
});

// Keyboard events
input.addEventListener("keydown", (e) => {
  console.log("Key down:", e.key);
});

input.addEventListener("keyup", (e) => {
  console.log("Key up:", e.key);
});

input.addEventListener("keypress", (e) => {
  console.log("Key pressed:", e.key);
});

// Form events
form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  console.log("Form submitted!");
});

input.addEventListener("focus", () => {
  console.log("Input focused");
});

input.addEventListener("blur", () => {
  console.log("Input lost focus");
});

input.addEventListener("input", (e) => {
  console.log("Typing:", e.target.value);
});

input.addEventListener("change", (e) => {
  console.log("Input changed to:", e.target.value);
});

// Window events
window.addEventListener("load", () => {
  console.log("Page fully loaded");
});

window.addEventListener("resize", () => {
  console.log("Window resized to:", window.innerWidth);
});

window.addEventListener("scroll", () => {
  console.log("Page scrolled");
});

//  Build: Click Counter 

let count = 0;

// Create counter display
const display = document.createElement("h2");
display.textContent = `Count: ${count}`;
document.body.appendChild(display);

// Create buttons
const increaseBtn = document.createElement("button");
increaseBtn.textContent = "+ Increase";
document.body.appendChild(increaseBtn);

const decreaseBtn = document.createElement("button");
decreaseBtn.textContent = "- Decrease";
document.body.appendChild(decreaseBtn);

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
document.body.appendChild(resetBtn);

// + button increases count
increaseBtn.addEventListener("click", () => {
  count++;
  display.textContent = `Count: ${count}`;
  console.log("Increased to:", count);
});

// - button decreases count 
decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    display.textContent = `Count: ${count}`;
    console.log("Decreased to:", count);
  } else {
    console.log("Cannot go below 0!");
  }
});

// Reset button sets to 0
resetBtn.addEventListener("click", () => {
  count = 0;
  display.textContent = `Count: ${count}`;
  console.log("Counter reset!");
});


