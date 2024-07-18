// Activity - 1: Array creation and access
// Task - 1:
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// Task - 2:
console.log(arr[0]);
console.log(arr[arr.length - 1]);

// Activity - 2: Array Methods (Basic)
// Task - 3:
arr.push(6);
console.log(arr[arr.length - 1]);
// Task - 4:
arr.pop();
console.log(arr);
// Task - 5:
arr.shift();
console.log(arr);
// Task - 6:
arr.unshift(1);
console.log(arr);

// Activity - 3: Array Methods (Intermediate)
// Task - 7:
console.log(arr.map((item) => 2 * item));
// Task - 8:
console.log(arr.filter((item) => item % 2 === 0));
// Task - 9:
console.log(arr.reduce((a, b) => a + b, 0));

// Activity - 4: Array Iteration
// Task - 10:
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

// Task - 11:
arr.forEach((element) => {
  console.log(element);
});

// Activity - 5: Multi-dimensional Arrays
// Task - 12:
let arr2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr2D);

// Task - 13:
// accessing middle row aand column element
console.log(arr2D[1][1]);
