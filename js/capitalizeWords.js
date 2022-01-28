//Base
function toCapitalCase(str) {
  const arr = str.split(' ');
  const resArr = [];

  for (let i = 0; i < arr.length; i++) {
    resArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  }

  return resArr.join(' ');
}

//Advanced
const toCapilatCaseAdv = (str) =>
  str
    .split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');

export { toCapitalCase, toCapilatCaseAdv };
