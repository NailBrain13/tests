import { uniqueValue, uniqueValueAdv } from './../js/uniqarg.js';

//8 Unique value
console.log(uniqueValue([36, 1, 2, 3], [4, 1, 8], [5, 8, 6, 99, 8]));
console.log(uniqueValueAdv([36, 1, 2, 3], [4, 1, 8], [5, 8, 6, 99, 8]));

let outputEight = document.querySelector('.output-8');
let inputEight = document.querySelector('.input-8');
let checkEight = document.querySelector('.check-8');

const shortValue = checkEight.addEventListener('click', () => {
  let a = inputEight.value;
  let newArr = JSON.parse('[' + a.split(' ') + ']');
  console.log(newArr);
  let b = uniqueValueAdv(newArr);
  let c = outputEight;
  console.log(b);
  c.textContent = `Массив уникальных значений=${b}`;
});
