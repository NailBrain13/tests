import { isPalindromArrow, isPalindromAdv } from './../js/palindrom.js';

//1 Polindrom test
// console.log(isPalindromArrow('adcvd'));
// console.log(isPalindromArrow('abba'));
// console.log(isPalindromAdv('abba'));
// console.log(isPalindromAdv('abdbd'));

let outputOne = document.querySelector('.output-1');
let inputOne = document.querySelector('.input-1');
let checkOne = document.querySelector('.check-1');

const checkValue = checkOne.addEventListener('click', () => {
  let a = inputOne.value;
  let b = isPalindromArrow(a);
  let c = outputOne;
  b === true
    ? (c.textContent = `${a}-'Верно'`)
    : (c.textContent = `${a}-'Не верно'`);
});
