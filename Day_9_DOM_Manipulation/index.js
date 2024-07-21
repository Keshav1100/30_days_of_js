// Activity - 1
const task_1 = document.getElementById("task-1");
task_1.innerText = "This is CHANGED content for id selection.";
const task_2 = document.querySelector(".task-2");
task_2.style.backgroundColor = "blue";

// Activity - 2
const task_3 = document.getElementById("task-3");
let newDiv = document.createElement("div");
newDiv.style.backgroundColor = "black";
newDiv.style.color = "white";
newDiv.style.padding = "10px";

newDiv.innerText =
  "I am a div element created through DOM Manipulation in JavaScript for task - 3 and appended to the body";
document.body.append(newDiv);

const task_4 = document.getElementById("task-4");
let newLi = document.createElement("li");
newLi.innerText = "I am a li element created later through JS.";
newLi.style.listStyle = "disc";
task_4.append(newLi);

// Activity - 3
const task_5 = document.getElementById("task-5");
task_5.remove();
const task_6 = document.getElementById("task-6");
task_6.lastElementChild.remove();

// Activity - 4
const task_7 = document.querySelector("a");
task_7.setAttribute("target", "_blank");
task_7.className = "link";

// Activity - 5
const task_9 = document.getElementById("change-content");
document.querySelector("button").addEventListener("click", (e) => {
  task_9.innerText = "content changed :)";
});
const borderColor = document.getElementById("borderColor");
borderColor.addEventListener("mouseover", (e) => {
  e.target.style.border = "2px solid blue";
});
borderColor.addEventListener("mouseout", (e) => {
  e.target.style.border = "none";
});
