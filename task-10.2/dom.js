// Task 10.2: The Event Object

//  Exercise: Using Event Properties 

document.addEventListener("click", function(event) {
  // The element that was clicked
  console.log("Target:", event.target);

  // The element the listener is attached to
  console.log("Current Target:", event.currentTarget);

  // Event type
  console.log("Type:", event.type);

  // Mouse position
  console.log("Position: X =", event.clientX, "Y =", event.clientY);

  // Prevent default behavior
  // event.preventDefault();

  // Stop propagation (bubbling)
  // event.stopPropagation();
});

// Keyboard events
document.addEventListener("keydown", function(event) {
  console.log("Key:", event.key);
  console.log("Code:", event.code);
  console.log("Shift held?", event.shiftKey);
  console.log("Ctrl held?", event.ctrlKey);
  console.log("Alt held?", event.altKey);
});

//  Build: Keyboard Shortcuts 

const form = document.querySelector("#contact-form");
const inputs = document.querySelectorAll("input");

document.addEventListener("keydown", function(event) {

  // Ctrl+S → Show "Saved!" alert 
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault(); 
    alert("Saved!");
    console.log("Ctrl+S pressed - Saved!");
  }

  // Escape → Clear all form inputs
  if (event.key === "Escape") {
    inputs.forEach(input => {
      input.value = "";
    });
    console.log("Escape pressed - All inputs cleared!");
  }

  // Ctrl+Enter → Submit form
  if (event.ctrlKey && event.key === "Enter") {
    event.preventDefault();
    form.dispatchEvent(new Event("submit"));
    console.log("Ctrl+Enter pressed - Form submitted!");
  }

});

// Handle form submit
form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Form submitted!");
});