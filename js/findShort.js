//Base
function findShort(str) {
  let wordsArr = str.split(' ');
  let sortedWordsArr = wordsArr.sort(function (a, b) {
    return a.length - b.length;
  });
  return sortedWordsArr[0];
}

//Advanced
function findShortAdvanced(str) {
  return str.split(' ').sort(function (a, b) {
    return a.length - b.length;
  })[0];
}

//Arrow
const findShortArrow = (string) =>
  string.split(' ').sort(function (a, b) {
    return a.length - b.length;
  })[0];

export { findShortAdvanced, findShortArrow };
