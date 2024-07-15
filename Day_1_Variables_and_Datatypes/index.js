// Activity - 1: Assignment Declaration

// Task - 1, 2:
var num1 = 1;
let num2 = 2;

console.log("num1: ", num1);
console.log("num2: ", num2);

// Activity - 2: Constant Declaration

// Task - 3:
const isTrue = false;
console.log("isTrue: ", isTrue);

// Activity - 3: Data Types

// Task - 4:
let num = 1;
let firstName = "Keshav";
let truth = true;
let obj = {
  challenge: "30 days of JS",
  day: 1,
};
let arr = [1, 2, 3, 4, 5];

console.log("Type of num: ", typeof num);
console.log("Type of firstName: ", typeof firstName);
console.log("Type of truth: ", typeof truth);
console.log("Type of obj: ", typeof obj);
console.log("Type of arr: ", typeof arr);

// Activity - 4: Reassigning variables

// Task - 5
let initialValue = "original";
console.log("Before reassigning, initialValue: ", initialValue);
initialValue = "changed";
console.log("After reassigning, initialValue: ", initialValue);

// Activity - 4: Understanding const
// Task - 6:
const constValue = "original";
console.log("Before reassigning, initialValue: ", constValue);
// constValue = "changed"; // TypeError: Assignment to constant variable.
console.log("After reassigning, initialValue: ", constValue);
