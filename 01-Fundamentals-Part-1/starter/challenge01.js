let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

// massMark = 95;
// heightMark = 1.88;

// massJohn = 85;
// heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

let markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn);
console.log(markHigherBMI);
