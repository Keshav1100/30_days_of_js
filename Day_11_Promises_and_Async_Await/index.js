// Activity - 1: Understanding Promises
// Task - 1:
new Promise(() => {
  setTimeout(() => {
    console.log("I am resolved as asked to be done in Task - 1.");
  }, 2000);
});

// Task - 2:
const promiseToReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("I am rejecting this promise.");
  }, 2000);
});
promiseToReject.catch((data) => console.log(data));

// Activity - 2: Chaining Promises
// Task - 3:
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ url });
    }, 2000);
  });
}
function saveToDB(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Data saved from: ${data.url}`);
      resolve("Data saved.");
    }, 3000);
  });
}

fetchData("https://fetchingdata.com")
  .then((data) => saveToDB(data))
  .then((msg) => console.log(msg));

// Activity - 3: Using Async/Await
// Task - 4:
const waitToResolve = async function () {
  await saveToDB({ url: "this is task 4" });
};

waitToResolve();
// Task - 5:
const rejectedPromise = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Something went wrong!");
    }, 5000);
  });
};
const task_5 = async function () {
  try {
    await rejectedPromise();
  } catch (err) {
    console.log(err);
  }
};
task_5();

// Activity - 4: Fetching Data from API
// Task - 6:

const url = "https://official-joke-api.appspot.com/random_joke";
fetch(url)
  .then((data) => data.json())
  .then((data) => console.log(data.setup, data.punchline))
  .catch((err) => console.log(err));
// Task - 7:
(async function response() {
  let data = await fetch(url);
  data = await data.json();
  console.log(data.setup);
  console.log(data.punchline);
})();

// Activity - 5: Concurent Promises
// Task - 7:
Promise.all([fetchData("hello"), saveToDB({ url: "url" })])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
// console.log(final);
// Task - 8:
Promise.race([fetchData("hello"), saveToDB({ url: "url" })])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
