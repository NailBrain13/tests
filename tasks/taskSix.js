import { capitalWordArrow } from './../js/countCapitalsWord.js';

//6 Capitals word
// console.log(capitalWordArrow('JavAScript'));

let outputSix = document.querySelector('.output-6');
let inputSix = document.querySelector('.input-6');
let checkSix = document.querySelector('.check-6');

const shortValue = checkSix.addEventListener('click', () => {
  let a = inputSix.value;
  let b = capitalWordArrow(a);
  let c = outputSix;
  c.textContent = `№ заглавных символов=${b}`;
});
