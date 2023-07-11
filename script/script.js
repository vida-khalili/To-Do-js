// Live Date and Time

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();

document.querySelector(".date").innerHTML = `${date}/${month}/${year}`;

function refreshTime() {
  var dateString = new Date()
    .toLocaleString("en-US", { hour12: false })
    .replace(" ", "");
  dateString = dateString.substring(0, dateString.length - 3).split(",");
  var formattedString = dateString[1];
  document.querySelector(".time").innerHTML = formattedString;
}

setInterval(refreshTime, 1000);

//Add New Task Button
let addButton = document.querySelector(".add-btn");

//Submit New Task Button
let submitNewTaskButton = document.querySelector(".submit-btn");

//Cancel New Task Button
let cancelNewTaskButton = document.querySelector(".cancel-btn");

//Form (new task)
let newTaskForm = document.querySelector(".add-task-form");

//Task Title Input
let newTaskTitleInput = document.querySelector(".task-input-title");

//Task Details Input
let newTaskDetailsInput = document.querySelector(".task-input-details");

let tasksList = [];
let count = 0;

const getNewTaskInput = (event) => {
  event.preventDefault();
  let newTaskTitle = newTaskTitleInput.value;
  let newTaskDetails = newTaskDetailsInput.value;
  count++;
  let task = {
    id: count,
    title: newTaskTitle,
    details: newTaskDetails,
    done: false,
  };
  tasksList.push(task);
  document.querySelector(".task-input").style.display = "none";
};

addButton.addEventListener("click", () => {
  document.querySelector(".task-input").style.display = "block";
});
cancelNewTaskButton.addEventListener("click", () => {
  document.querySelector(".task-input").style.display = "none";
});

newTaskForm.addEventListener("submit", getNewTaskInput);
