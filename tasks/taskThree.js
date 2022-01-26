import { toInitialsAdvanced, toInitialsArrow } from './../js/initials.js';

//3 Initials
// console.log(toInitialsAdvanced('Name Surname'));
// console.log(toInitialsArrow('Name Surname'));

let outputThree = document.querySelector('.output-3');
let inputThree = document.querySelector('.input-3');
let checkThree = document.querySelector('.check-3');

const checkValue = checkThree.addEventListener('click', () => {
  let a = inputThree.value;
  let b = toInitialsArrow(a);
  let c = outputThree;
  c.textContent = `Ваши инициалы ${b}`;
});
