document.getElementById("add-btn").addEventListener("click", addTask);
document.getElementById("task-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("task-list");

  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.innerText = taskText;
  span.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  const delBtn = document.createElement("button");
  delBtn.innerHTML = "✖";
  delBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
