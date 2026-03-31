// Task 10.3: Event Bubbling & Delegation

//  Exercise 1: Understanding Bubbling 

document.getElementById("grandparent").addEventListener("click", () => {
  console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

//  Exercise 2: Event Delegation 

function handleClick(event) {
  console.log("Item clicked:", event.target.textContent);
}

// GOOD way - ONE listener on the parent ul
document.querySelector("#task-list").addEventListener("click", (event) => {

  // Check if clicked element is an li
  if (event.target.matches("li")) {
    handleClick(event);
  }

  // Or check for a class
  if (event.target.classList.contains("nav-link")) {
    handleClick(event);
  }
});

//  Build: Delegated Task List 

const taskInput = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-btn");
const taskList = document.querySelector("#task-list");

// Add new task
addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();

  if (text === "") {
    console.log("Please enter a task!");
    return;
  }

  // Create li
  const li = document.createElement("li");
  li.textContent = text;

  // Create delete button inside li
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  li.appendChild(deleteBtn);

  // Add to list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
  console.log("Task added:", text);
});

// ONE listener on ul handles ALL clicks 
taskList.addEventListener("click", (event) => {

  // Clicking delete button removes the item
  if (event.target.classList.contains("delete-btn")) {
    const li = event.target.parentElement;
    li.remove();
    console.log("Task deleted!");
  }

  // Clicking the task text toggles completed
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
    console.log("Task toggled!");
  }
});