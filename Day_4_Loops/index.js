// Activity - 1: For loop
// Task - 1:
for (let index = 1; index <= 10; index++) {
  console.log(index);
}
// Task - 2:
for (let index = 1; index <= 10; index++) {
  console.log(`5 x ${index} = ${5 * index}`);
}

// Activity - 2: While loop
// Task - 3:
let sum = 0;
let index = 1;
while (index <= 10) {
  sum += index;
  index++;
}
console.log(sum);

// Task - 4:
let num = 10;
while (num > 0) {
  console.log(num);
  num--;
}

// Activity - 3: Do...while loop
// Task - 5:
num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);

// Task - 6:
let n = 5;
let fac = 1;
let i = 1;
do {
  fac = fac * i;
  i++;
} while (i <= n);
console.log(fac);

// Activity - 4: Nested Loops
// Task - 7:

for (let i = 1; i <= 5; i++) {
  let string = "";
  for (let j = 1; j <= i; j++) {
    string += " * ";
  }
  console.log(string);
}

// Activity - 5: Loop Control Statements
// Task - 8:
let a = 1;
while (a <= 10) {
  if (a === 5) {
    a++;
    continue;
  } else console.log(a);
  a++;
}
// Task - 9:
a = 1;
while (a <= 10) {
  if (a === 7) break;
  else console.log(a);
  a++;
}
