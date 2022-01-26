import { findShortArrow, findShortAdvanced } from './../js/findShort.js';
//2 Shortest word
// console.log(findShortArrow('a short word tester'));
// console.log(findShortAdvanced('short word tester'));

let outputTwo = document.querySelector('.output-2');
let inputTwo = document.querySelector('.input-2');
let checkTwo = document.querySelector('.check-2');

const shortValue = checkTwo.addEventListener('click', () => {
  let a = inputTwo.value;
  let b = findShortArrow(a);
  let c = outputTwo;
  c.textContent = `Самое короткое слово=${b}`;
});
