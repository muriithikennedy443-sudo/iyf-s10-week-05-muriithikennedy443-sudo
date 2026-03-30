// Task 9.1: Selecting Elements - dom.js

// getElementById - returns a SINGLE element 
const header = document.getElementById("main-header");
console.log("getElementById:", header);

//  getElementsByClassName - returns HTMLCollection 
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

//  getElementsByTagName - returns HTMLCollection 
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

//  querySelector - returns FIRST match 
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

//  querySelectorAll - returns NodeList (like an array) 
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// PRACTICE: Select these 7 elements

// 1. The h1 element
const h1 = document.querySelector("h1");
console.log("1. h1 element:", h1);

// 2. All elements with class "content"
const contentElements = document.getElementsByClassName("content");
console.log("2. All .content elements:", contentElements);

// 3. The form with id "contact-form"
const contactForm = document.getElementById("contact-form");
console.log("3. Form #contact-form:", contactForm);

// 4. The email input
const emailInput = document.querySelector('input[type="email"]');
console.log("4. Email input:", emailInput);

// 5. All list items in the nav
const navItems = document.querySelectorAll("nav li");
console.log("5. Nav list items:", navItems);

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("6. First .nav-link:", firstNavLink);

// 7. The last paragraph
const allParagraphs = document.querySelectorAll("p");
const lastParagraph = allParagraphs[allParagraphs.length - 1];
console.log("7. Last paragraph:", lastParagraph);

