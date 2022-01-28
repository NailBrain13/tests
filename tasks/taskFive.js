import { minMaxAdvanced, minMaxArrow } from './../js/minMax.js';

//5 Min/max value
// console.log(minMaxAdvanced([1, 2, 6, -1]));
// console.log(minMaxArrow([1]));

let outputFive = document.querySelector('.output-5');
let inputFive = document.querySelector('.input-5');
let checkFive = document.querySelector('.check-5');

const minMaxValue = checkFive.addEventListener('click', () => {
  let a = inputFive.value.toString();
  let newArr = JSON.parse('[' + a + ']');
  let b = minMaxArrow(newArr);
  let c = outputFive;
  c.textContent = `Минимальное/Максимальное=${b}`;
});
