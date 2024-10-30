'use strict';
// Coding Challenge #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, x: draw, team2 } = game.odds;
// const {odds: {team1, x: draw, team2}} = game;

// const countPlayerScore = function (player, scoreList) {
//   let score = 0;
//   for (const s of scoreList) {
//     if (player === s) {
//       score++;
//     }
//   }
//   return score;
// };
// const printGoals = function (...players) {
//   for (const player of players) {
//     const score = countPlayerScore(player, game.scored);
//     if (score > 0) {
//       console.log(`${player} scored ${score} goal${score > 1 ? 's' : ''}.`);
//     } else {
//       console.log(`${player} doesn't score.`);
//     }
//   }
// };
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log(`${game.team1} is more likely to win.`);
team1 > team2 && console.log(`${game.team2} is more likely to win.`);

// Coding Challenge #2
for (const [i, scoredByPlayer] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${scoredByPlayer}`);
}

const valuesOdds = Object.values(game.odds);
const calcAverageOdds = function (arr) {
  let sumOdds = 0;
  for (const odd of valuesOdds) {
    sumOdds += odd;
  }
  return sumOdds / arr.length;
};

// let average = 0;
// for(const odd of valuesOdds) {
//  average += odd;
//  average /= valuesOdds.length;
// })
// console.log(average);
console.log(calcAverageOdds(valuesOdds));

const entriesOdds = Object.entries(game.odds);
for (const [team, odd] of entriesOdds) {
  // const teamName = game[team] ?? 'draw';
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}.`);
}

const countPlayerScore = function (player, scoreList) {
  let score = 0;
  for (const s of scoreList) {
    if (player === s) {
      score++;
    }
  }
  return score;
};
const printScores = function (...players) {
  const scorers = {};
  for (const player of players) {
    const score = countPlayerScore(player, game.scored);
    scorers[player] = score;
  }
  return scorers;
};
const scorers = printScores(...game.scored);

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
