//Base
function uniqueValue() {
  const arr = [...arguments];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(...arr[i]);
  }
  newArr.sort((a, b) => a - b);
  newArr = new Set(newArr);
  return [...newArr];
}

//Advanced
function uniqueValueAdv() {
  return [...new Set([...arguments].flat().sort((a, b) => a - b))];
}

export { uniqueValue, uniqueValueAdv };
