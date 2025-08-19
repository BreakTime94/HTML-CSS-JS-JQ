let person = {
  name : 'kim',
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}`)
  }
};
console.log(person);
console.log(person.name);
console.log(person.sayHello());
person.sayHello();

let obj = {};
let key = "hello";
obj[key] = "world";
console.log(obj)
console.log(obj.hello);

let name = 3;
obj = {name : 'Lee'};

console.log(obj[name]);

person = {
  'last-name': 'Lee',
  1: 10
};43
2
// person.last-name; // 브라우저와 Node.js의 결과 값이 다르다?
//Node.js에서는 last라는 프로퍼티가 없고, name이란 변수가 없어서 undefined - name 이어서 reference error가 발생한다.
// 하지만 브라우저에서는 undefined - ''로 처리된다. window 객체에 name이란 값이 있으며 기본적으로 '' (빈 문자열임) 그래서 undefined - 0 (암묵적 형변환)이라 NaN으로 뜬다.

// 객체의 얕은 복사 & 깊은 복사

const o = {x : {y: 1}};

const c1 = {... o};

console.log(c1);

console.log(c1 === o); // false

console.log(c1.x === o.x); // true

const _ = require('lodash');

const c2 = _.cloneDeep(o);

console.log(c2 === o); // false
console.log(c2.x === o.x); //false

o.x = {y: 1};

console.log(o.x === c1.x);


