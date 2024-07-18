// Activity - 1: Function Declaration
// Task - 1:
function evenOdd(n) {
  return n % 2 === 0;
}
console.log(evenOdd(3));

// Task - 2:
function square(n) {
  return n * n;
}
console.log(square(3));
// Activity - 2: Function Expression
// Task - 3:
function maxCheck(num1, num2) {
  return num1 ? num1 > num2 : num2;
}
console.log(maxCheck(3, 2));
// Task - 4:
function stringConcat(str1, str2) {
  return str1 + str2;
}
console.log(stringConcat("hello", " sir"));

// Activity - 3: Arrow Functions
// Task - 5:
const sumOf2 = (a, b) => a + b;
console.log(sumOf2(2, 4));

// Task - 6:
const checkCharInString = (char, str) => str.includes(char);
console.log(checkCharInString("2", "5652"));

// Activity - 4: Function Parameters and Default Values
// Task - 7:
function prodOf2(n1, n2 = 1) {
  return n1 * n2;
}
console.log(prodOf2(4));
// Task - 8:
function greet(name, age = 18) {
  return `Greetings ${name}! Your age is ${age}`;
}
console.log(greet("keshav"));

// Activity - 5: Higher-Order Functions
// Task - 9:
function callFunc(func, n) {
  for (let index = 1; index < n; index++) {
    console.log(func("keshav"));
  }
}
callFunc(greet, 5);

// Task - 10:
function applyFunc(func1, func2, val) {
  return func2(func1(val));
}
console.log(applyFunc(prodOf2, square, 5));
