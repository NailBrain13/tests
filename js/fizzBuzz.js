const fizzbuzz = (number) => {
  let newArr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArr.push('fizzbuzz');
    } else if (i % 3 == 0) {
      newArr.push('fizz');
    } else if (i % 5 === 0) {
      newArr.push('buzz');
    } else {
      newArr.push(i);
    }
  }
  return newArr;
};

export { fizzbuzz };
