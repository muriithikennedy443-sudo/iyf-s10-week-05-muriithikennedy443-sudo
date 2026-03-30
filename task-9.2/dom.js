// Task 9.2: Traversing the DOM

const nav = document.querySelector("nav");

// Parent
console.log("Parent of nav:", nav.parentElement);

// Children
console.log("Nav children:", nav.children);
console.log("Nav firstElementChild:", nav.firstElementChild);
console.log("Nav lastElementChild:", nav.lastElementChild);

// Siblings
const article = document.querySelector("article");
console.log("article nextElementSibling:", article.nextElementSibling);
console.log("article previousElementSibling:", article.previousElementSibling);

// Descendants
const navLinks = nav.querySelectorAll("a");
console.log("Nav descendants (all a tags):", navLinks);

// PRACTICE TASKS

// 1. Select the header, then navigate to the nav inside it
const header = document.querySelector("header");
const navInsideHeader = header.firstElementChild;
console.log("1. Nav inside header:", navInsideHeader);

// 2. Select the first nav-link, then get its parent li
const firstNavLink = document.querySelector(".nav-link");
const parentLi = firstNavLink.parentElement;
console.log("2. Parent li of first nav-link:", parentLi);

// 3. Select the article, then get its next sibling (section)
const articleEl = document.querySelector("article");
const nextSibling = articleEl.nextElementSibling;
console.log("3. Next sibling of article:", nextSibling);

// 4. Select the ul, then get all its child li elements
const ul = document.querySelector("ul");
const liChildren = ul.children;
console.log("4. All li children of ul:", liChildren);

// 5. Start from the footer and navigate up to the body
const footer = document.querySelector("footer");
const bodyEl = footer.parentElement;
console.log("5. Parent of footer (body):", bodyEl);