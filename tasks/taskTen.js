import { findVowels, findVowelsAdv } from '../js/findVowels.js';

//10 Find Vowels
console.log(findVowels('hello'));
console.log(findVowelsAdv('hello world'));

let outputTen = document.querySelector('.output-10');
let inputTen = document.querySelector('.input-10');
let checkTen = document.querySelector('.check-10');

const shortValue = checkTen.addEventListener('click', () => {
  let a = inputTen.value;
  let b = findVowelsAdv(a);
  let c = outputTen;
  c.textContent = `Гласные=${b}`;
});
