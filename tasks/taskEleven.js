import { toCapilatCaseAdv, toCapitalCase } from './../js/countCapitalsWord';

//11 Lorem ipsum dolor sit amet.

let outputEleven = document.querySelector('.output-11');
let inputEleven = document.querySelector('.input-11');
let checkEleven = document.querySelector('.check-11');

const toCapitalazieWords = checkEleven.addEventListener('click', () => {
  let a = inputEleven.value;
  let b = toCapilatCaseAdv(newNuber);
  let c = outputEleven;
  c.textContent = `Результат=[${b}]`;
});
