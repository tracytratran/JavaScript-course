// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991));


// Problem 1:
// We work for a company building a smart home thermomether. Our most recent task is this: "Given an array of temparatures of one day, calculate the temparature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temparature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// 1. Understanding the problem
// - What is the temp aplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temp?
// - What's a sensor error? What to do?

// 2. Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcMax = function (arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") continue;
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// // console.log(calcMax(temparature));

// const calcMin = function (arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") continue;
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   return min;
// };

// // console.log(calcMin(temparature));

// const calcTempAmplitude = function (arr) {
//   const max = calcMax(arr);
//   console.log(max);
//   const min = calcMin(arr);
//   console.log(min);
//   return max - min;
// };

// console.log(calcTempAmplitude(temparature));

// Problem 2:
// Function should now receive 2 arrays of temparatures

// 1. Understanding the problem
// - With 2 arrays, should we implement functionally twice? NO! Just merge 2 arrays

// 2. Breaking up into sub-problems
// - Merge 2 arrays

const merge = function (arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;
};

// console.log(merge([1, 2, 3], [5, 9, 0]));

// Concat
// const arr1 = [];
// const arr2 = [];
// const temp = arr1.concat(arr2);

const calcMax = function (arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

const calcMin = function (arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
};

const calcTempAmplitude = function (arr1, arr2) {
  const temp = merge(arr1, arr2);
  const max = calcMax(temp);
  const min = calcMin(temp);
  return max - min;
};

console.log(calcTempAmplitude([3, 5, 1], [9, 0, 5]));


// Debugging with the console and breakpoints
// Using a debugger
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: 10,
    // C.FIX
    // value: Number(prompt("Degrees celsius:")),
  };
  // B. FIND
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A. IDENTIFY
console.log(measureKelvin());

const merge = function (arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;
};

const calcMax = function (arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

const calcMin = function (arr) {
  // debugger;
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
};

const calcTempAmplitudeBug = function (arr1, arr2) {
  const temp = merge(arr1, arr2);
  const max = calcMax(temp);
  const min = calcMin(temp);
  return max - min;
};

const amplitueBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A. IDENTIFY
console.log(amplitueBug);
*/
