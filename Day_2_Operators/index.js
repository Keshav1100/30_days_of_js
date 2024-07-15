// Activity - 1: Arithematic Operations

let num1 = 2;
let num2 = 3;
// Task - 1:
console.log("num1 + num2: ", num1 + num2);
// Task - 2:
console.log("num1 - num2: ", num1 - num2);
// Task - 3:
console.log("num1 x num2: ", num1 * num2);
// Task - 4:
console.log("num1 / num2: ", num1 / num2);
// Task - 5:
console.log("num1 % num2: ", num1 % num2);

// Activity - 2: Assignment Operators
// Task - 6:
num1 += 2;
console.log("On adding 2 to num1, its value is: ", num1);
// Task - 7:
num2 -= 1;
console.log("On subtracting 1 from num2, its value is: ", num2);

// Activity - 3: Comparision Operators
console.log("num1: ", num1);
console.log("num2: ", num2);
// Task - 8:
console.log("num1 > num2: ", num1 > num2);
console.log("num1 < num2: ", num1 < num2);
// Task - 9:
console.log("num1 >= num2: ", num1 >= num2);
console.log("num1 <= num2: ", num1 <= num2);
// Task - 10:
console.log("num1 == num2: ", num1 == num2);
console.log("num1 === num2: ", num1 === num2);

// Activity - 3: Logical Operators
// Task - 11:
if (num1 < 10 && num1 >= 0) {
  console.log("num1 is a positive number less than 10.");
}
// Task - 12:
if (num1 < 10 || num1 >= 0) {
  console.log("num1 is either a positive number or less than 10.");
}
// Task - 13:
if (!(num1 !== num2)) {
  console.log("num1 and num2 are equal.");
}

// Activity - 4: Ternary Operator
// Task - 14:
num1 >= 0 ? console.log("Posituve") : console.log("Negative");
