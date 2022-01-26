//Base
function toInitials(name) {
  let nameArr = name.split(' ');
  let firstLettersArr = nameArr.map(function (elem) {
    return elem.slice(0, 1).toUpperCase() + '.';
  });
  let initials = firstLettersArr.join('');
  return initials;
}

//Advanced
function toInitialsAdvanced(name) {
  return name
    .split(' ')
    .map(function (elem) {
      return elem.slice(0, 1).toUpperCase() + '.';
    })
    .join('');
}

//Arrow
const toInitialsArrow = (name) =>
  name
    .split(' ')
    .map((elem) => `${elem.slice(0, 1).toUpperCase()}.`)
    .join('');

export { toInitialsAdvanced, toInitialsArrow };
