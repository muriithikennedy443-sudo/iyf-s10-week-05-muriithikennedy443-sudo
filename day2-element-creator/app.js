const addBtn = document.getElementById("add-btn");
const container = document.getElementById("container");
let count = 0;

addBtn.addEventListener("click", () => {
  count++;

  const div = document.createElement("div");
  div.className = "paragraph-item";

  const p = document.createElement("p");
  p.textContent = `Paragraph ${count}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", () => {
    div.remove();
  });

  div.appendChild(p);
  div.appendChild(deleteBtn);
  container.appendChild(div);
});