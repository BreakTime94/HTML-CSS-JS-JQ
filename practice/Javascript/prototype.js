function Circle (radius) {
  this.radius = radius;
}

// Circle.prototype.getArea = function () {
//   return Math.PI * this.radius ** 2;
// }; // 기존에 Circle 인스턴스를 새로 만들면 그 안에 메서드도 계속 매번 새로 만들었다. (=== 비교 하면 false로 뜸!)
// 그러나 이렇게 prototype(function 인터페이스 내에 존재하는 속성) JS도 인터페이스가 있네..?

const obj = {};
const parent = {x : 1};
// getter 함수인 get__proto__

console.log("obj의 프로토타입" +obj.__proto__);
console.log( "parent의 프로토타입" + parent.__proto__);
console.log(obj.__proto__ === parent.__proto__); //true 나옴;
//setter 함수인 set__proto__
obj.__proto__ = parent; //obj의 prototype이 parent 그 자체가 되어버림
console.log(obj.__proto__);
console.log(obj) // {} 빈 객체
console.log(obj.x) // 빈 객체에 없으면 prototype에 있는 프로퍼티를 찾으러 간다. 그래서 있으면 보여준다는 의미인 거 같다.

const circle = new Circle(3);

console.log(Object.getOwnPropertyNames(circle.__proto__));
console.log(circle.constructor)

