// Activity - 1: If-else statements

// Task - 1:
let num = 2;

if (num > 0) {
  console.log(num, " is positive.");
} else if (num < 0) {
  console.log(num, " is negative.");
} else {
  console.log(num, " is zero.");
}

// Task - 2:
let age = 19;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else if (age <= 0) {
  console.log("Invalid age.");
} else {
  console.log("You are not eligible to vote.");
}

// Activity - 2: Nested if-else statements
// Task - 3:
let num1 = 1;
let num2 = 2;
let num3 = 6;
// It is considered that all the three numbers are unique
if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1, " is the largest.");
  } else {
    console.log(num3, " is the largest.");
  }
} else {
  if (num2 > num3) {
    console.log(num2, " is the largest.");
  } else {
    console.log(num3, " is the largest.");
  }
}

// Activity - 3: Switch Case
// Task - 4:
let day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid day number");
    break;
}

// Task - 5:
let grade = 89;
switch (grade) {
  case grade > 90:
    console.log("A");
    break;
  case grade > 80:
    console.log("B");
    break;
  case grade > 60:
    console.log("C");
    break;
  case grade > 40:
    console.log("D");
    break;
  case grade > 30:
    console.log("E");
    break;

  default:
    console.log("F");
    break;
}

// Activity - 4: Conditional (Ternary) Operator
// Task - 6:
let numToCheck = 9;
numToCheck % 2 === 0
  ? console.log(numToCheck, " is an even number.")
  : console.log(numToCheck, " is an odd number.");

// Activity - 5: Combining Conditions
// Task - 7:
let year = 2025;
if (year % 4 === 0) {
  if (year % 100 === 0 && year % 400 === 0) {
    console.log(year, " is a leap year.");
  } else if (year % 100 !== 0) {
    console.log(year, " is a leap year.");
  }
} else {
  console.log(year, " is not a leap year.");
}
