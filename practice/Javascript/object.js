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
};
// person.last-name; // 브라우저와 Node.js의 결과 값이 다르다?
//Node.js에서는 last라는 프로퍼티가 없고, name이란 변수가 없어서 undefined - name 이어서 reference error가 발생한다.
// 하지만 브라우저에서는 undefined - ''로 처리된다. window 객체에 name이란 값이 있으며 기본적으로 '' (빈 문자열임) 그래서 undefined - 0 (암묵적 형변환)이라 NaN으로 뜬다.


