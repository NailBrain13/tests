import { toCapitalCase, toCapilatCaseAdv } from './../js/capitalizeWords.js';
//11 Lorem ipsum dolor sit amet.

let outputEleven = document.querySelector('.output-11');
let inputEleven = document.querySelector('.input-11');
let checkEleven = document.querySelector('.check-11');

const toCapitalazieWords = checkEleven.addEventListener('click', () => {
  let a = inputEleven.value;
  let b = toCapitalCase(a);
  let c = outputEleven;
  c.textContent = `Результат=[${b}]`;
});
