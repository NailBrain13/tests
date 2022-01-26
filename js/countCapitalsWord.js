function capitalWord(word) {
  let bigLetter = word.toUpperCase().split('');
  let smallLetters = word.split('');
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (smallLetters[i] === bigLetter[i]) {
      result.push(i);
    }
  }
  return result;
}

// console.log(capitalWord('JavaScript'));

function capitalWordArrow(word) {
  let result = [];
  word.split('').forEach((value, index) => {
    if (value === value.toUpperCase()) {
      result.push(index);
    }
  });
  return result;
}

// console.log(capitalWordArrow('JavAScript'));

export { capitalWord, capitalWordArrow };
