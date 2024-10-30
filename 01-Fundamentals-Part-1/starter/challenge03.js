const firstScoreDolphins = 96;
const secondScoreDolphins = 108;
const thirdScoreDolphins = 89;
const firstScoreKoalas = 88;
const secondScoreKoalas = 91;
const thirdScoreKoalas = 110;

const scoreDolphins = (firstScoreDolphins + secondScoreDolphins + thirdScoreDolphins) / 3;
const scoreKoalas = (firstScoreKoalas + secondScoreKoalas + thirdScoreKoalas) / 3;

// console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreDolphins < scoreKoalas) {
    console.log('Koalas win the trophy');
} else {
    console.log('Both win the trophy');
}
