// TASK 1
let first = 2;
let last = 9;
function createArray(from, to) {
  let arr = [];
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
  return arr;
}
// console.log(createArray(first,last));

// TASK 2

function createArray2(from, to) {
  let arr = [];
  let counter = 1;
  for (let i = from; i <= to; i++) {
    for (let j = 1; j <= counter; j++) {
      arr.push(i);
    }
    counter++;
  }
  return arr;
}
// console.log(createArray2(first,last));

// TASK 3
let randArray = [];

for (let i = 0; i < 5; ++i) {
  let value = Math.floor(Math.random() * 500);
  randArray.push(value);
}
console.log(randArray);

// TASK 4
let arr = [5, 3, 4, 5, 6, 7, 3];
let arr2 = [];
function compact(arr) {
  let count = {};
  let maxCount = 0;
  let frequentNum;
  for (let num of arr) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
    if (count[num] > maxCount) {
      maxCount = count[num];
      frequentNum = num;
    }
  }
  arr2 = arr.filter((num) => num !== frequentNum);
  return arr2;
}
console.log(compact(arr));

// TASK 5
let arr3 = [
  5,
  "Limit",
  12,
  "a",
  "3",
  99,
  2,
  [2, 4, "33", "a", "text"],
  "strong",
  "broun",
];
let arrNew = funcName(arr3);
console.log(arrNew);
function funcName(arr3) {
  let nArray = arr3.flat();
  let arrNum = [];
  let arrString = [];
  for (let i = 0; i <= nArray.length - 1; i++) {
    let elType = typeof nArray[i];
    switch (elType) {
      case "number":
        arrNum.push(nArray[i]);
        break;
      case "string":
        arrString.push(nArray[i]);
        break;
    }
  }
  return [arrNum, arrString];
}

// TASK 6
function calc(a, b, op) {
  if (op == 1) {
    let sub = a - b;
    return sub;
  } else if (op == 2) {
    let mult = a * b;
    return mult;
  } else if (op == 3) {
    let divison = a / b;
    return divison;
  } else {
    console.log("'op' should be between 1-3, try again");
  }
}

console.log(calc(15, 3, 3));

// TASK 7
function findUniqu(arr) {
  let count = {};
  for (let num of arr) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
    if (count[num] > 1) return false;
  }
  return true;
}
let arrRepeat = [5, 3, 4, 5, 6, 7, 3];
let arrUnique = [5, 4, 6, 7, 3];
console.log(findUniqu(arrRepeat));
console.log(findUniqu(arrUnique));