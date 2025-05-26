//function

console.log(max(4, 25));

//1. 선언적 함수

//함수의 이름을 사용

function max(a, b) {
    return a > b ? a : b;
}

//2. 익명 함수
// 변수 선언

var min = function(a, b) {
    return a < b ? a : b;
}
// ctrl + alt + n

console.log(max(10, 5));
console.log(min(10, 5));

console.log(typeof max);
console.log(typeof min);

//선언적 함수로 두 수의 곱을 반환하는 함수를 정의 mul
function mul(a, b) {
    return a * b;
}
// 익명 함수로 두 수의 차이를 반환하는 함수를 정의 sub
var sub = function(a, b) {
    return a > b ? (a - b) : (b - a);
}

console.log(mul(10, 5));
console.log(sub(5, 10));

var add = function(a, b) {
    if (!(typeof a ==="number" && typeof b ==="number")) return NaN;
    return a + b; 
}
//type script
// var add2 Number = function(a:Number, b:Number) {
    // return a + b;
// }

//hoist: var로 선언한 변수, 선언적 함수는 끌어올려짐 

//var로 선언한 변수는 중복선언 가능

console.log(num); // undefined로 값이 출력이 됨 (오류가 안 뜸) 얘는 익명함수
// 선언적 함수(변수명이 없는 함수는) 선언 이전에 함수를 호출하여도 문제없이 작동. 인터프리터가 작동시에 변수 및 선언적함수를 맨 위로 올려서 진행하는 방식을 택함
// 선언적 함수는 몸통까지 주르륵 다 올라감

var num = 10;
var num = 20;

console.log(num); 

// 함수 내에서 선언한 변수란? 지역변수
// 익명함수 === 함수리터럴 자바스크립트는 리터럴이 넘쳐난다.
// 10 number literal
// "abcd" String literal 
// true boolean literal
// {} object literal
// function () {} : function literal
// [] array literal 
console.log("abcdef".substring(3, 5)); // 결과값 de 
console.log([10, 20, 30][1]); // 결과 값 20
console.log({a : 10, b : 20}.a); //a값 출력

//IIFE>??
(function(a) {console.log('파라미터의 값 :' + a)})(30); // 즉시실행함수. 즉 메서드 명 없이 일회용으로 사용하는 느낌

// javascript에서 function은 type이다! 이게 중요하다! 

obj = {no:1, name:'새똥이', score:80, getScore : function() {
    return this.score;
}}; // 필드만 가지고 있음

console.log(obj);
console.log(obj.score);
console.log(obj.getScore);

function max2 (a, b, c) {
    // return (a > b ? a : b) > c ? (a > b ? a : b) : c ;
    // if (a > b) {
    //     if (a > c) {
    //         return a;
    //     } else {
    //         return c;
    //     }
    // }
    // else if (b > c) {
    //     return b;
    // } else {
    //     return c;
    // }
    if (a > b && a > c) {
        return a;
    } else { // 얘는 a가 이미 최대값이 아닐때이다.
        if(b > c) {
            return b;
        } else {
            return c;
        }
    } 
}
function max3(a, b, c) {
    return max(max(a, b), c);
}

console.log(max2(12, 2587, 5));

function max4(a, b, c) { //arguments: 배열태입
     console.log(arguments);
}

max4(4, 20, 18); // {'0' : 4, '1' : 20, '2' : 18}

