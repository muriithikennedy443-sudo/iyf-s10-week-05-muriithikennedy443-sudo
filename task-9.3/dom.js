// Task 9.3: Modifying Content

//  Exercise 1: Text Content 
const h1 = document.querySelector("h1");

// Reading text
console.log("textContent:", h1.textContent); 
console.log("innerText:", h1.innerText);      
// Modifying text
h1.textContent = "New Title";
console.log("h1 after change:", h1.textContent);


//  Exercise 2: HTML Content 
const article = document.querySelector("article");

// Reading HTML
console.log("article innerHTML:", article.innerHTML);

// Modifying HTML
article.innerHTML = `
  <h2>Updated Article</h2>
  <p>This is new content.</p>
`;

// Safer: textContent escapes HTML (protects against hacks)
const userInput = "<script>alert('hack!')</script>";
article.textContent = userInput; 


//  Exercise 3: Attributes 
const link = document.querySelector(".nav-link");

// Get attribute
console.log("href via getAttribute:", link.getAttribute("href"));
console.log("href via property:", link.href);

// Set attribute
link.setAttribute("href", "https://example.com");
console.log("href after setAttribute:", link.getAttribute("href"));

// Check attribute
console.log("has target?", link.hasAttribute("target")); 

// Remove attribute
link.removeAttribute("target");
console.log("target removed");

// Data attributes
const dataEl = document.querySelector("[data-id]");
if (dataEl) {
  console.log("data-id:", dataEl.dataset.id);
  console.log("data-category:", dataEl.dataset.category);
  dataEl.dataset.newAttr = "value"; 
}

// Exercise 4: Styles 
const container = document.querySelector(".container");

// Inline styles (one at a time)
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Multiple styles at once
Object.assign(container.style, {
  backgroundColor: "#333",
  color: "white",
  padding: "20px"
});

console.log("Styles applied to container!");