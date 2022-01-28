import {
  createPhoneNumber,
  createPhoneNumberArrow,
} from '../js/phoneNumber.js';

//9 Phone Number
// console.log(createPhoneNumber(123496789));
// console.log(createPhoneNumber(1234967891));
// console.log(createPhoneNumberArrow(123496789));
// console.log(createPhoneNumberArrow(1234967891));

let outputEleven = document.querySelector('.output-9');
let inputEleven = document.querySelector('.input-9');
let checkEleven = document.querySelector('.check-9');

const converteNumber = checkEleven.addEventListener('click', () => {
  let a = inputEleven.value;
  let b = createPhoneNumber(a);
  let c = outputEleven;
  c.textContent = `Ваш номер=${b}`;
});
