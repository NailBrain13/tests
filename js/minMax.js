//Base
function minMaxBase(arr) {
  let result = [];
  let minValue = Math.min.apply(null, arr);
  let maxValue = Math.max.apply(null, arr);
  result.push(minValue, maxValue);
  return result;
}

//Advanced
function minMaxAdvanced(arr) {
  return [Math.min.apply(null, arr), Math.max.apply(null, arr)];
}

//Arrow
const minMaxArrow = (arr) => [Math.min(...arr), Math.max(...arr)];

export { minMaxAdvanced, minMaxArrow };
