// Selectors
const todoInput = document.querySelector("#textInput");
const addTodoBtn = document.querySelector("#addTodoBtn");
const textContainer = document.querySelector(".text-container");

function addTask() {
  const text = todoInput.value;

  if (text.trim() === "") {
    alert("Fältet får inte vara tomt!");
    return;
  }
  // Skapa och lägg till den nya tasken i container-diven
  newDiv = textContainer.innerHTML +=
  `<div class="task-div">
    <span class="text">${text}</span>
    <button class="complete-btn">Slutförd</button>
    <button class="delete-btn">Ta bort</button>
  </div>`;

  // Rensa textrutan
  todoInput.value = "";
}
// Lägg till en eventlistener på knappen som lägger till uppgift
addTodoBtn.addEventListener("click", addTask);

todoInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Lägg till en eventlistener på containern för att hantera klicks
textContainer.addEventListener("click", function (e) {
  const clickedElement = e.target;

  if (clickedElement.classList.contains("complete-btn")) {
    // Markera som slutförd/icke-slutförd
    clickedElement.classList.toggle("completed");
  }

  if (clickedElement.classList.contains("delete-btn")) {
    // Ta bort uppgift
    const taskDiv = clickedElement.parentElement;
    textContainer.removeChild(taskDiv);
  }
});
