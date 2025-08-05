// Contact form submit
function handleSubmit(event) {
  event.preventDefault();

  document.getElementById("contactForm").reset();
  document.getElementById("successMessage").textContent = "Submitted successfully!";
}

// To-do list logic
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => li.remove();

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}
