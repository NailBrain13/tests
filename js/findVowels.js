//Base
const findVowels = (str) => {
  const vowels = ['e', 'y', 'u', 'i', 'o', 'a'];
  let count = 0;
  for (let char of str.toLowerCase()) {
    vowels.includes(char) ? count++ : 0;
  }
  return count;
};

//Advanced
const findVowelsAdv = (str) => {
  const matches = str.match(/[eyuioa]/gi);
  return matches ? matches.length : 0;
};

export { findVowels, findVowelsAdv };
