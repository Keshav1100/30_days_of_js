// Activity - 1: Template Literals
// Task - 1:
let name = "Keshav";
let age = 19;
console.log(`My name is ${name} and I'm {age} years old :)`);

// Task - 2:
let multiLineStr = `This
Is
A
Multi-line
String
Literal.
`;
console.log(multiLineStr);

// Activity - 2: Destructuring
// Task - 3:
let arr = [1, 2, 3, 4];
let [first, second] = arr;
console.log(`first: ${first}`);
console.log(`second: ${second}`);

// Task - 4:
let book = {
  title: "The Psychology of Money",
  author: "Morgan Housel",
};

let { title: bookName, author: authorName } = book;

console.log(`Book: ${bookName}`);
console.log(`Author: ${authorName}`);

// Activity - 3:  Spread and Rest Operators
// Task - 5:
let arrToBeSpread = [1, 2, 4, 5];
let arrFromSpread = [...arrToBeSpread, 6, 7, 8, 3];
console.log(arrFromSpread);

// Task - 6:
let sumFromRest = (...val) => {
  let sum = 0;
  for (const num of val) {
    sum += num;
  }
  return sum;
};

console.log(sumFromRest(1, 2, 34));

// Activity - 4: Default Parameters
// Task - 7:
function prod(num1, num2 = 1) {
  return num1 * num2;
}
console.log(prod(2, 2));
console.log(prod(2));

// Activity - 8: Enhanced Object Literals
// Task - 8:
let firstName = "Keshav";
let obj = {
  firstName,
  age,
  greet() {
    return `Myself ${this.firstName}. I'm ${this.age} years old.`;
  },
};

console.log(obj);

// Task - 9:

const propName1 = "name";
const propName2 = "age";
const propName3 = "country";
const person = {
  [propName1]: "Keshav",
  [propName2]: 19,
  [propName3]: "India",
};

console.log(person);
