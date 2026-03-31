// Mini-Project: Interactive To-Do List

//  DOM Elements 
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

//  State 
let todos = [];
let currentFilter = "all";
let nextId = 1;

//  Functions 

// Create a single li element from a todo object
function createTodoElement(todo) {
  const li = document.createElement("li");
  li.dataset.id = todo.id;
  if (todo.completed) li.classList.add("completed");

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo-checkbox";
  checkbox.checked = todo.completed;

  // Text span
  const span = document.createElement("span");
  span.textContent = todo.text;

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

// Clear list and re-render based on current filter
function renderTodos() {
  todoList.innerHTML = "";

  const filtered = todos.filter(todo => {
    if (currentFilter === "active") return !todo.completed;
    if (currentFilter === "completed") return todo.completed;
    return true;
  });

  filtered.forEach(todo => {
    todoList.appendChild(createTodoElement(todo));
  });

  updateStats();
}

// Add new todo to array and render
function addTodo(text) {
  if (text.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const todo = {
    id: nextId++,
    text: text.trim(),
    completed: false
  };

  todos.push(todo);
  renderTodos();
  console.log("Todo added:", todo);
}

// Toggle completed state
function toggleTodo(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  renderTodos();
}

// Remove from array and render
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
  console.log("Todo deleted, id:", id);
}

// Update items left count
function updateStats() {
  const remaining = todos.filter(todo => !todo.completed).length;
  itemsLeft.textContent = `${remaining} item${remaining !== 1 ? "s" : ""} left`;
}

// Set current filter and re-render
function filterTodos(filter) {
  currentFilter = filter;

  // Update active button styling
  filters.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
  });

  renderTodos();
}

// Bonus: Edit todo on double click
function startEdit(li, todo) {
  const span = li.querySelector("span");
  const editInput = document.createElement("input");
  editInput.className = "edit-input";
  editInput.value = todo.text;

  li.replaceChild(editInput, span);
  editInput.focus();

  // Save on Enter, cancel on Escape
  editInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const newText = editInput.value.trim();
      if (newText) {
        todos = todos.map(t =>
          t.id === todo.id ? { ...t, text: newText } : t
        );
        renderTodos();
      }
    }
    if (e.key === "Escape") {
      renderTodos(); // cancel edit
    }
  });
}

//  Event Listeners 

// Form submit - add todo
form.addEventListener("submit", function(event) {
  event.preventDefault();
  addTodo(input.value);
  input.value = ""; // clear input
});

// ONE listener on ul - handles toggle, delete, edit 
todoList.addEventListener("click", function(event) {
  const li = event.target.closest("li");
  if (!li) return;

  const id = Number(li.dataset.id);
  const todo = todos.find(t => t.id === id);

  // Delete button clicked
  if (event.target.classList.contains("delete-btn")) {
    deleteTodo(id);
  }

  // Checkbox clicked - toggle
  if (event.target.classList.contains("todo-checkbox")) {
    toggleTodo(id);
  }
});

// Double click on span to edit
todoList.addEventListener("dblclick", function(event) {
  if (event.target.tagName === "SPAN") {
    const li = event.target.closest("li");
    const id = Number(li.dataset.id);
    const todo = todos.find(t => t.id === id);
    startEdit(li, todo);
  }
});

// Filter buttons
filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filterTodos(btn.dataset.filter);
  });
});

// Clear completed button
clearCompletedBtn.addEventListener("click", () => {
  todos = todos.filter(todo => !todo.completed);
  renderTodos();
  console.log("Cleared all completed tasks");
});

//  Initialize 
renderTodos();