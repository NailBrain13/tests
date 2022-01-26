const sayHello = (hello) => {
  return (name) => `${hello} ${name}`;
};

const hiName = sayHello('Hello');
console.log(hiName('Alex'));
const byeName = sayHello('Bye');
console.log(byeName('Serg'));

//Замыкание
function createIncrement(n) {
  return function (num) {
    return n + num;
  };
}

const addOne = createIncrement(1);
console.log(addOne(10));
