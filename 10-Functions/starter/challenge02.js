'use strict';
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
})();

// const header = document.querySelector('h1');
header.addEventListener('click', function () {
  header.style.color = 'blue';
});
