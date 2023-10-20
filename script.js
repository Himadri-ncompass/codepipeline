
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
let todoCounter = 1;
// Function to add a todo
function addTodo() {
  // Get input value
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    // Create new li element
    const li = document.createElement("li");
    // Create checkbox element
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", markAsCompleted);
    // Create span element with todo text
    const span = document.createElement("span");
    span.innerText = todoText;
    // Add checkbox and span to li
    li.appendChild(checkbox);
    li.appendChild(span);
    // Add li to ul
    todoList.appendChild(li);
    // Clear input
    todoInput.value = "";
    // Increment todo counter
    todoCounter++;
  }
}
// Function to mark a todo as completed
function markAsCompleted(event) {
    const checkbox = event.target;
    const li = checkbox.parentElement;
    
    if (checkbox.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  }