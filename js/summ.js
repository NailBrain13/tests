//Base
function sumDigitsBase(number) {
  let moduleNumber = Math.abs(number);
  let str = moduleNumber.toString();
  let arr = str.split('');
  let result = arr.reduce(function (sum, cur) {
    return Number(sum) + Number(cur);
  }, 0);
  return result;
}

//Advanced
function sumDigitsAdvanced(number) {
  return Math.abs(number)
    .toString()
    .split('')
    .reduce(function (sum, cur) {
      return +sum + +cur;
    }, 0);
}

//Arrow
const sumDigitsArrow = (number) =>
  Math.abs(number)
    .toString()
    .split('')
    .reduce((sum, cur) => +sum + +cur, 0);

export { sumDigitsAdvanced, sumDigitsArrow };
