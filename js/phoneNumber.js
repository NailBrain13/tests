//Base
function createPhoneNumber(numbers) {
  let numArr = numbers.toString().split('');
  if (numArr.length === 9) {
    numArr.splice(0, 0, '(');
    numArr.splice(4, 0, ')');
    numArr.splice(5, 0, ' ');
    numArr.splice(9, 0, '-');
    return numArr.join('');
  } else {
    return 'Слишком много цифр';
  }
}

//Advanced
const createPhoneNumberArrow = (numbers) => {
  const strNum = numbers.toString();

  if (strNum.length === 9) {
    return `(${strNum.slice(0, 3)}) (${strNum.slice(3, 6)}-${strNum.slice(
      6,
      9,
    )})`;
  } else {
    return 'Слишком много цифр';
  }
};

export { createPhoneNumber, createPhoneNumberArrow };
