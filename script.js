const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");
const themeBtn = document.getElementById("themeBtn");

addBtn.addEventListener("click", addTask);
themeBtn.addEventListener("click", toggleTheme);

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;

  checkbox.addEventListener("change", () => {
    li.classList.toggle("done");
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  taskList.appendChild(li);

  taskInput.value = "";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}