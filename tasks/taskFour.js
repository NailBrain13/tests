import { sumDigitsAdvanced, sumDigitsArrow } from './../js/summ.js';

//4 Summ all numbers
// console.log(sumDigitsAdvanced(12345));
// console.log(sumDigitsArrow('12345'));

let outputFour = document.querySelector('.output-4');
let inputFour = document.querySelector('.input-4');
let checkFour = document.querySelector('.check-4');

const shortValue = checkFour.addEventListener('click', () => {
  let a = inputFour.value;
  console.log(typeof a);
  let newArr = JSON.parse('[' + a + ']').join('');
  console.log(newArr, typeof newArr);
  let b = sumDigitsAdvanced(newArr);
  console.log(b);
  let c = outputFour;
  c.textContent = `Сумма всех чисел=${b}`;
});

//1,2,3,4,5
