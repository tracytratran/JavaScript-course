// Values and Variables
const country = "Vietnam";
const continent = "Asia";
let population = 100;

console.log(country);
console.log(continent);
console.log(population);

// Data Types
const isIsland = false;
// let language;
const language = "vietnamsese";

console.log(
  typeof "isIsland",
  typeof "population",
  typeof "country",
  typeof "language"
);

// language = "vietnamese";

// Basic Operators
let halfPopulation = population / 2;

population++;

console.log(population);
console.log(halfPopulation);

let populationFinland = 6;
if (population > populationFinland) {
  console.log("Vietnam has more people than Finland");
}

const averagePopulationCountry = 33;
if (population < averagePopulationCountry) {
  console.log("Vietnam has less people than the average country");
}

// const description =
//   country +
//   " is in " +
//   continent +
//   ", " +
//   "and its " +
//   population +
//   " million people speak " +
//   language +
//   " . ";

// Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);

// Taking Decisions: if/else Statements
if (population > averagePopulationCountry) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${
      averagePopulationCountry - population
    } below average.`
  );
}

// Type Conversation and Coercion
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// Equality Operators: == vs. ===
// let numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// Logical Operators
if (language === "english" && population < 50 && isIsland === false) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// The switch Statement
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
  case "spanish":
    console.log("2nd place in number of native speakers");
  case "english":
    console.log("3rd place");
  case "hindi":
    console.log("Number 4");
  case "arabic":
    console.log("5th most spoken language");
  default:
    console.log("Great language too :D");
}

// The Conditional (Ternary) Operator
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average.`
);
