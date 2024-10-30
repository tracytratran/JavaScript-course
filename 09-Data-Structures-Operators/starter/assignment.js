'use strict';
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
// Destructuring Arrays
const [firstBook, secondBook] = books;
const [, , thirdBook] = books;
console.log(firstBook, secondBook, thirdBook);

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// Destructuring Objects
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

const { keywords: tags } = books[0];
console.log(tags);

const { language, programmingLanguage = 'unknown' } = books[6];
console.log(language, programmingLanguage);

let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

const printBookInfo = function ({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}.`);
};
printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});
printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

// The Spread Operator
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

const spellWord = function (str) {
  console.log([...str].join(' '));
};
spellWord('JavaScript');

// Rest Pattern and Parameters
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword);
console.log(rest);

const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher);
console.log(restOfTheBook);

const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
};
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// Short Circuiting (&& and ||)
const hasExamplesInJava = function (obj) {
  return obj.programmingLanguage === 'Java' || 'no data available';
};
console.log(hasExamplesInJava(books[0]));
console.log(hasExamplesInJava(books[1]));

for (const book of books) {
  // if (book.onlineContent === true) {
  //   console.log(`${title}" provides online content.`);
  // }
  book.onlineContent === true &&
    console.log(`${title}" provides online content.`);
}

// The Nullish Coalescing Operator (??)
for (const book of books) {
  book.onlineContent ??
    console.log(`${book.title}" provides no data about its online content.`);
}

// Logical Assignments Operators
for (const book of books) {
  // book.edition ??= 1;
  book.edition ||= 1;
}

for (const book of books) {
  // book.thirdParty.goodreads.rating < 4.2 && book.highlighted = false
  // if(book.thirdParty.goodreads.rating < 4.2) {
  //   book.highlighted = false;
  // } else book.highlighted = true;
  book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.2);
}
console.log(books);

// Looping Arrays: The for-of Loop
let pageSum = 0;
for (const book of books) {
  pageSum += book.pages;
}
console.log(pageSum);

const allAuthors = [];
for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else allAuthors.push(...book.author);
}
console.log(allAuthors);

for (const [index, author] of allAuthors.entries()) {
  console.log(`${index + 1}. ${author}`);
}

// Enhanced Object Literals
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1]
// };
let newBook = {};
for (const data of bookData) {
  newBook[data[0]] = data[1];
}
console.log(newBook);

const pages = 800;
const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages
}
console.log(newBook2);

// Optional Chaining (?.)
const getFirstKeyword = function(book) {
  return book.keywords?.[0];
}
console.log(getFirstKeyword(books[0]));
console.log(getFirstKeyword(newBook2));

// Looping Objects: Object Keys, Values and Entries
const entries = [];
for(const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}
console.log(entries);

for(const [index, value] of Object.values(books[0].thirdParty.goodreads).entries()) {
  entries[index].push(value);
}
// console.log(Object.values(books[0].thirdParty.goodreads));
console.log(entries);

const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries2);

// Sets
const allKeywords = [];
for (const book of books) {
  allKeywords.push(...book.keywords);
}
console.log(allKeywords);

const uniqueKeywords = new Set(allKeywords);

// uniqueKeywords.add('coding').add('science');
uniqueKeywords.add('coding');
uniqueKeywords.add('science');

uniqueKeywords.delete('business');

console.log(uniqueKeywords);

const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

uniqueKeywords.clear();
console.log(uniqueKeywords);

// Maps: Fundamentals
const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']]);

bookMap.set('pages', 464);
console.log(bookMap);

console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

console.log(bookMap.size);

if(bookMap.has('author')) console.log('The author of the book is known');

// Maps: Iteration
const firstBookMap = new Map (Object.entries(books[0]));
console.log(firstBookMap);

for(const [key, value] of firstBookMap) {
  if(typeof value === 'number') {
    console.log(key);
  }
}

// Working with Strings - Part 1
console.log(books[0].ISBN[6]);
console.log(books[0].ISBN[4]);
console.log(books[0].ISBN[9]);
console.log(books[0].ISBN[8]);

const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));

console.log(quote.slice(quote.indexOf('boxing')));
// console.log(quote.slice(quote.lastIndexOf(' ') + 1));

const isContributor = function(authorName) {
  return authorName.includes('(Contributor)');
  // return author.lastIndexOf('(Contributor)') !== -1;
}
console.log(isContributor('Julie Sussman (Contributor)'));
console.log(isContributor('Robert Sedgewick'));

// Working with Strings - Part 2
const normalizeAuthorName = function(authorName) {
  const cleanName = authorName.replace('(Contributor)','');
  const nameLowerCase = cleanName.trim().toLowerCase().split(' ');
  const correctName = [];
  for(const nameUpperCase of nameLowerCase) {
    correctName.push(nameUpperCase.replace(nameUpperCase[0], nameUpperCase[0].toUpperCase())); 
  }
  return correctName.join(' ');
}
console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

const newBookTitle = books[1].title.replace('Programs', 'Software');
console.log(newBookTitle);

const logBookTheme = function(str) {
  const title = str.toLowerCase();
  if(title.startsWith('computer')) {
    console.log('This book is about computers.')
  } else if (title.includes('algorithms') && title.includes('structures')) {
    console.log('This book is about algorithms and data structures.')
  } else if (!title.includes('operating') && title.endsWith('system') || title.endsWith('systems')) {
    console.log('This book is about some systems, but definitely not about operating systems.')
  }
}
console.log(books[2].title);
logBookTheme(books[2].title);

// Working with Strings - Part 3
const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
const logBookCategories = function(categories) {
  const categoryArray = categories.split(';');
  for(const category of categoryArray) {
    console.log(category);
  }
}
logBookCategories(bookCategories);

const keywordsArray = [];
const getKeywordsAsString = function(books) {
  for(const book of books) {
    keywordsArray.push(...book.keywords);
  }
  const uniqueKeywordsArr = new Set (keywordsArray);
  console.log([...uniqueKeywordsArr].join(';'));
}
getKeywordsAsString(books);

const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];
const logBookChapters = function(bookChapters) {
  // for(const chapter of bookChapters) {
  //   console.log(`${chapter[0].padEnd(20, '_')} ${chapter[1]}`);
  // }
  for(const [chapter, page] of bookChapters) {
    console.log(chapter.padEnd(20, '_') + ' ' + page);
  }
}
logBookChapters(bookChapters);