// Task 9.4: Adding & Removing Elements

//  Exercise 1: Creating Elements 

// Create new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph";
newParagraph.className = "content highlight";

// Add to the page - appendChild 
const article = document.querySelector("article");
article.appendChild(newParagraph);
console.log("1. Paragraph appended to article");

// Insert before another element
const firstParagraph = article.querySelector("p");
const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "I was inserted before the first paragraph";
anotherParagraph.className = "content";
article.insertBefore(anotherParagraph, firstParagraph);
console.log("2. Paragraph inserted before first p");

// Modern insertion methods
const modernP = document.createElement("p");
modernP.textContent = "Added with modern method";

article.prepend(modernP);  
console.log("3. prepend - added at start of article");

// article.append(modernP);       
// firstParagraph.before(modernP); 
// firstParagraph.after(modernP);  


//  Exercise 2: Removing Elements 

// Remove an element 
const footer = document.querySelector("footer");
footer.remove();
console.log("4. Footer removed");

// Remove a child 
const nav = document.querySelector("nav");
const lastLink = nav.querySelector("li:last-child");
lastLink.parentElement.removeChild(lastLink);
console.log("5. Last nav link removed");

// Clear all children - simple way
// article.innerHTML = "";

// Clear all children - safer way 
while (article.firstChild) {
  article.removeChild(article.firstChild);
}
console.log("6. All article children cleared");


//  Exercise 3: Cloning Elements 

const navItem = document.querySelector("li");
const clone = navItem.cloneNode(true); 

// Modify the clone so it's different
clone.querySelector("a").textContent = "New Link";

// Add clone to the nav list
document.querySelector("ul").appendChild(clone);
console.log("7. Nav item cloned and added");


//  Build: Function that adds nav items dynamically 

function addNavItem(text, href) {
  // Create li element
  const li = document.createElement("li");

  // Create a element inside li
  const a = document.createElement("a");
  a.textContent = text;
  a.href = href;
  a.className = "nav-link";

  // Put a inside li
  li.appendChild(a);

  // Add li to the nav list
  document.querySelector("ul").appendChild(li);

  console.log(`Nav item "${text}" added!`);
}

// Test the function
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");