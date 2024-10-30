'use strict';
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const variableNames = document.querySelector('textarea').value;

// const separateNames = function (text) {
//   return text.split('\n');
// };

// const upperFirstLetter = function (str) {
//   return str.replace(str[0], str[0].toUpperCase());
// };

const convertNameToCamelCase = function () {
  const variableNames = document.getElementById('variable-names').value;
  const names = variableNames.split('\n');
  for (const [index, name] of names.entries()) {
    const words = name.trim().toLowerCase().split('_');
    const firstWord = words[0];
    // const secondWord = upperFirstLetter(words[1]);
    const secondWord = words[1].replace(words[1][0], words[1][0].toUpperCase());
    const output = firstWord + secondWord;
    console.log(`${output.padEnd(25)}${'✅'.repeat(index + 1)}`);
  }
};

document
  .getElementById('convert-button')
  .addEventListener('click', convertNameToCamelCase);
