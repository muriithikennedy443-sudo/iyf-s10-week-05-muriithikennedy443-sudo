// Task 10.4: Form Handling

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

//  Real-time validation 

// Validate name as user types
nameInput.addEventListener("input", function() {
  const value = event.target.value;

  if (value.length < 2) {
    showError(nameInput, "Name must be at least 2 characters");
  } else {
    clearError(nameInput);
  }
});

// Validate email as user types
emailInput.addEventListener("input", function() {
  const value = event.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(value)) {
    showError(emailInput, "Please enter a valid email");
  } else {
    clearError(emailInput);
  }
});

//  Form submission 

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  // Get all form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log("Form data:", data);

  // Validate all fields before submitting
  if (isValid(data)) {
    showSuccess("Form submitted successfully!");
    form.reset(); // clear all inputs
    console.log("Form submitted!");
  } else {
    console.log("Form has errors - fix them first");
  }
});

//  Helper Functions 

// Check if all data is valid
function isValid(data) {
  let valid = true;

  if (data.name.length < 2) {
    showError(nameInput, "Name must be at least 2 characters");
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    showError(emailInput, "Please enter a valid email");
    valid = false;
  }

  return valid;
}

// Show red error styling + message below input
function showError(input, message) {
  // Add error class for red border
  input.classList.add("error");
  input.classList.remove("success");

  // Check if error message already exists
  let errorMsg = input.nextElementSibling;

  if (!errorMsg || !errorMsg.classList.contains("error-msg")) {
    // Create new error message element
    errorMsg = document.createElement("p");
    errorMsg.className = "error-msg";
    input.insertAdjacentElement("afterend", errorMsg);
  }

  errorMsg.textContent = message;
}

// Remove error styling and message
function clearError(input) {
  input.classList.remove("error");
  input.classList.add("success");

  // Remove error message if it exists
  const errorMsg = input.nextElementSibling;
  if (errorMsg && errorMsg.classList.contains("error-msg")) {
    errorMsg.remove();
  }
}

// Show green success message
function showSuccess(message) {
  // Check if success message already exists
  let successMsg = document.querySelector(".success-msg");

  if (!successMsg) {
    successMsg = document.createElement("p");
    successMsg.className = "success-msg";
    form.insertAdjacentElement("afterend", successMsg);
  }

  successMsg.textContent = message;

  // Hide it after 3 seconds
  setTimeout(() => {
    successMsg.remove();
  }, 3000);
}