// Activity - 1
// Task - 1:
const task_1 = document.getElementById("task-1");
const changeContent = document.getElementById("change-content");
task_1.addEventListener("click", (e) => {
  changeContent.innerText = "Text is changed.";
});

// Task - 2:
const task_2 = document.getElementById("task-2");
task_2.addEventListener("dblclick", (e) => {
  if (e.target.className === "hidden") {
    e.target.setAttribute(
      "src",
      "https://th.bing.com/th/id/OIP.AfKMLf4rKX7EqOSAVpujIQHaEK?w=182&h=102&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    );
    e.target.className = "";
  } else {
    e.target.setAttribute("src", "");
    e.target.className = "hidden";
  }
});
// Activity - 2
// Task - 3:
const task_3 = document.getElementById("task-3");
task_3.addEventListener("mouseover", (e) => {
  e.target.style.border = "2px solid red";
});
// Task - 4:
task_3.addEventListener("mouseout", (e) => {
  e.target.style.border = "none";
});

// Activity - 3
// Task - 5:
const task_5 = document.getElementById("task-5");
task_5.addEventListener("keydown", (e) => {
  console.log(e.key);
});
// Task - 6:
const task_6 = document.getElementById("task-6");
const task_6_para = document.getElementById("task-6-para");
task_6.addEventListener("keyup", (e) => {
  e.target.value = task_6_para.innerText;
});

// Activity - 4
// Task - 7:
const task_7 = document.getElementById("task-7-form");
task_7.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  let age = document.getElementById("age");
  console.log(name, age);
});

// Task - 8:
const task_8 = document.getElementById("gender");
task_8.addEventListener("change", (e) => {
  document.getElementById("gender-value").innerText = e.target.value;
});

// Activity - 5
// Task - 9:

const task_9 = document.querySelectorAll(".task-9");
task_9.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.innerText);
  });
});

// Task - 10:
const task_10 = document.getElementById("parent");
task_10.addEventListener("click", (e) => {
  if (e.target.classList.contains("child")) {
    console.log("child is clicked");
  }
});
