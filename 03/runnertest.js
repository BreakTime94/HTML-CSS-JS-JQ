console.log(10, 20, 30);
console.log('메이플스토리');
console.log('マジですか？');
console.log('日本語');
//var let const 변수 3개 종류
// Java Script의 정식 명칭은 ECMA Script 
// var는 ES5 이전의 변수 선언 타입이다. 
// ES6 이후 변수 선언은 let, 상수 선언은 const로 나뉘어졌다. 
// 나머지 변수들은 타입에 구해 받지 않고 이것저것 다 넣을 수가 있다.
// 자바스크립트의 변수는 7종 정도 있다.
var num = 10;
let str = '20';
const name = '새똥이'; // 상수는 재 할당 불가능
num = 30;
str = 40;
console.log(num, str, name)
class Student {

}

var student = new Student(); // 객체 생성
console.log(student) // 