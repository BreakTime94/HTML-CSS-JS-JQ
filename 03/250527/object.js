//Number
const num1 = 10;
const num2 = new Number(20);

console.log(num1, num2);

console.log(num1 + num2);

console.log(typeof num1, typeof num2); // number와 object type으로 나온다. int와 Integer 느낌?!

console.log(num1.toFixed(3)); //자바에서는 일반 리터럴로 만든 변수가 메서드 호출이 불가하지만, 자바 스크립트는 호출이 가능하다.
console.log(num2.toFixed(2)); // toFixed는 String type이다.

const str1 = "문자열";
const str2 = new String("문자열");

console.log(str1, str2);
console.log(str1 + str2);
console.log(typeof str1, typeof str2); 

console.log(typeof (str1.length)); // 문자열의 길이를 반환해줌 얘는 숫자 타입

for(let i = 0; i < str1.length ; i++) {
    console.log(str1[i]);
}
str1.includes("a"); // 여기는 false 

console.log(num2);// toString 때문에 이렇게 보이는 듯.
console.log(num2[0]);

const str3 = "abcd1234abcd";

console.log(str3.substring(3, 5));
console.log(str3.substr(3, 5)); //3번 인덱스부터 5개
console.log(str3.slice(3, 5));

//문자열 관련 특이메서드 

str3.endsWith; //종료하냐 시작하냐 
str3.match //정규식 표현 관련

//str3.replace

const reg1 = new RegExp(["A-Z"]);
const reg2 = /[A-Z]/; // / /사이에 넣으면 정규식 문법이다. regexp literal

console.log(typeof reg1, typeof reg2);

console.log(reg1, reg2);

const arr1 = [1,2,3,4];
const arr2 = new Array(1, 2, 3, 4);


console.log(/[A-Z]/.test("abcdABCD"));
console.log(/[A-Z]/.test("abcd1234"));

console.log("abcdef".replace("a", "1")); // a라는 글자를 1로 바꾸겠다라는 뜻.

console.log("abcdefabcdef".replace(/a/g,"1")); // 전역
console.log("abcdefAbcdef".replace(/a/gi,"1")); //전역 + 대소문자 구별 x

[].join();
//Arrays.sort([]);
[].sort();

