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
  newDiv = textContainer.innerHTML += `<div class="task-div">${text}
            <input type="checkbox" id="myCheck">
            <label for="myCheck">Markera som slutförd</label>
            <button class="delete-btn">Ta bort uppgift</button>
        </div>`;

  // Rensa textrutan
  todoInput.value = "";
}
// Lägg till en eventlistener på knappen som lägger till tasken
addTodoBtn.addEventListener("click", addTask);

// Lägg till en eventlistener på containern för att hantera klicks
textContainer.addEventListener("click", function (e) {
  const clickedElement = e.target;

  if (clickedElement.type === "checkbox") {
    // Markera som slutförd eller icke-slutförd
    const taskDiv = clickedElement.parentElement;
    if (clickedElement.checked) {
      taskDiv.classList.add("completed");
    } else {
      taskDiv.classList.remove("completed");
    }
  }

  if (clickedElement.classList.contains("delete-btn")) {
    // Ta bort uppgiften
    const taskDiv = clickedElement.parentElement;
    textContainer.removeChild(taskDiv);
  }
});