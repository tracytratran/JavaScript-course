"use strict";

// Functions
const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
};
console.log(describeCountry("Vietnam", 100, "Hanoi"));
console.log(describeCountry("Denmark", 5.9, "Copenhaghen"));
console.log(describeCountry("Japan", 125.7, "Tokyo"));

// Function Expression
const worldPopulation = 7900;
const percentageOfWorld1 = function (population) {
  return (population / worldPopulation) * 100;
};
console.log(percentageOfWorld1(100));
console.log(percentageOfWorld1(5.9));
console.log(percentageOfWorld1(125.7));

// Function Declaration
function percentageOfWorld2(population) {
  return (population / worldPopulation) * 100;
}
console.log(percentageOfWorld2(100));
console.log(percentageOfWorld2(5.9));
console.log(percentageOfWorld2(125.7));

// Arrow Function
const percentageOfWorld3 = (population) => (population / worldPopulation) * 100;
console.log(percentageOfWorld2(100));
console.log(percentageOfWorld2(5.9));
console.log(percentageOfWorld2(125.7));

// Function calling other Function
const describePopulation = function (country, population) {
  const percentageOfWorld = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentageOfWorld}% of the world.`;
};
console.log(describePopulation("Vietnam", 100));
console.log(describePopulation("Denmark", 5.9));
console.log(describePopulation("Japan", 125.7));

// Introduction to Arrays
const populations = [100, 5.9, 125.7, 6.7];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(100),
  percentageOfWorld1(5.9),
  percentageOfWorld1(125.7),
  percentageOfWorld1(6.7),
];
console.log(percentages);

// Basic Array Operations (Methods)
const neighbours = ["China", "Laos", "Cambodia"];
neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany") === false) {
  console.log("Probably not a central European country :D");
}

neighbours[0] = "Thailand";
console.log(neighbours);

// Introduction to Objects
const myCountry = {
  country: "Vietnam",
  capital: "Hanoi",
  language: "vietnamese",
  population: 100,
  neighbours: ["China", "Laos", "Cambodia"],
  //   describe: function () {
  //     console.log(
  //       `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
  //     );
  //   },
};

// Dot vs. Bracket Notation
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population = myCountry.population + 2;
console.log(myCountry.population);
myCountry["population"] = myCountry["population"] - 2;
console.log(myCountry["population"]);

// Object Methods
myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
  );
};
myCountry.describe();

myCountry.checkIsland = function () {
  this.isIsland = this.neighbours.length == 0;
};
myCountry.checkIsland();
console.log(myCountry);

// Interation: The for Loop
for (let vote = 1; vote <= 50; vote++) {
  console.log(`Vote number ${vote} is currently voting.`);
}
// Looping Arrays, Breaking and Continuing

// const populations = [100, 5.9, 125.7, 6.7];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

// Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  const neighbours = listOfNeighbours[i];
  console.log("Neighbour:");
  for (let j = 0; j < neighbours.length; j++) {
    const neighbouring = neighbours[j];
    console.log(neighbouring);
  }
}

// The while Loop

// const worldPopulation = 7900;
// const percentageOfWorld1 = function (population) {
//     return (population / worldPopulation) * 100;
//   };
//const populations = [100, 5.9, 125.7, 6.7];
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3);
