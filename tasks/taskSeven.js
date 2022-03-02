import { fizzbuzz } from './../js/fizzBuzz.js';

//7 fizzbuzz
// let a = fizzbuzz(100);

let outputSeven = document.querySelector('.output-7');
let inputSeven = document.querySelector('.input-7');
let checkSeven = document.querySelector('.check-7');

const calaFizzBuzz = checkSeven.addEventListener('click', () => {
  let a = inputSeven.value;
  let newNuber = parseInt(a);
  let b = fizzbuzz(newNuber);
  let c = outputSeven;
  c.textContent = `Массив=[${b}]`;
});
