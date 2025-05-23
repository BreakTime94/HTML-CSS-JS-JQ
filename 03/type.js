//Js 데이터 타입
// 숫자, 문자열, 논리 >> 기본자료형
// 객체, 함수, undefined .... symbol null은 object type 이다
var num ; // undefined 
num = 20;
console.log(typeof num) //할당된 값에 의해서 type이 결정
num = true;
console.log(typeof num) //할당된 값에 의해서 type이 결정
var obj = {a:10, b:20}; //객체 타입
var arr = [3, 2, 1, true, '가나다']; //배열 타입
var fn = function () {};
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof fn);
//
console.log(obj.a);
console.log(arr); // 배열내 배열 함수 등이 다 들어갈 수 있음

// back tick을 활용한 내부의 참조호출 다른 따옴표는 사용 불가
var str = `여기는 ${obj.b} 문자열 ${10} ${obj}` + "\nhello" + 20; //백틱 키 로도 문자열 표현 가능

console.log(str);


