function Circle(radius) {

  console.log(new.target);
  if(!new.target) {
    return new Circle(radius);
  }
  this.radius = radius;
  this.getDiameter= function () {
    return 2 * this.radius;
  }
}
// 생성자 함수를 통한, 객체 생성방법 -> 내부 메서드 [[constructor]]를 가지고 있는 경우에 new 연산자로 생성이 가능하다.
const circle = new Circle(5)
const circle2 = Circle(5);

console.log(circle);
console.log(circle2);

console.log("=============18장 일급객체와 함수==============")
//함수는 자체 프로퍼티들이 매우 많다.

function multiply(x, y) {
  console.log(arguments);
  const iterator = arguments[Symbol.iterator]();
  for(let i of iterator) { // of 는 value
    console.log(i);
  }
  return x * y;
}
multiply(1, 3 ,5);

function sum() { //arguments 는 유사 배열 객체지만 배열 메서드를 사용할 수는 없다.

  //const array = Array.prototype.slice.call(arguments);
  const array = [... arguments];
  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0)
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3));

//ECMAScript에서 프로토 타입 체이닝에 대해서 알아보고, 함수 객체는 결국 Function의 생성자 함수를 통해서 만들어진다.