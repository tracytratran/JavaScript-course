'use strict';

// const calcAverage = (score1, score2, score3) => {
//     const average = (score1 + score2 + score3) / 3;
//     return average;
// }
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test Data 1
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {}
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
    } else if (avgKoalas >= (avgDolphins * 2)) {
        console.log('Koalas win (${scoreKoalas} vs. ${scoreDolphins})');
    } else {
        console.log(`No team wins...`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Test Data 2
scoreDolphins = calcAverage(44, 23, 71);
scoreKoalas = (65, 54, 49);

checkWinner(scoreDolphins, scoreKoalas);