'use strict';
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    typeof answer === 'number' &&
      answer >= 0 &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}.`);
    }
  },
};

// poll.registerNewAnswer = function () {
//   const messageWindow = Number(
//     prompt(
//       `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//     )
//   );
//   if (
//     typeof messageWindow === 'number' &&
//     messageWindow >= 0 &&
//     messageWindow < this.answers.length
//   ) {
//     this.answers[messageWindow] += 1;
//   }
//   this.displayResults('string');
//   this.displayResults('array');
// };

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults = function (type = 'array') {
//   if (type === 'string') {
//     console.log(`Poll results are ${this.answers.join(', ')}.`);
//   } else {
//     console.log(this.answers);
//   }
// };

const data1 = { answers: [5, 2, 3] };
poll.displayResults.call(data1, 'array');
poll.displayResults.call(data1, 'string');

const data2 = { answers: [1, 5, 3, 9, 6, 1] };
poll.displayResults.call(data2, 'array');
poll.displayResults.call(data2, 'string');
