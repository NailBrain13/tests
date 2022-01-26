//base
function isPalindromBase(str) {
  let arr = str.split('');
  let reversArr = arr.reverse();
  let resString = reversArr.join('');
  let res = (str = resString);
  return res;
}

//advanced
function isPalindromAdv(str) {
  return str === str.split('').reverse().join('');
}

//arrow
const isPalindromArrow = (str) => str === str.split('').reverse().join('');

export { isPalindromArrow, isPalindromAdv, isPalindromBase };
