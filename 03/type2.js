var obj = 30;

var o = {a:10};
console.log(o.b); // o 내에서 b 타입은 없기에 undefined로 표기된다.
if(2&&' ') {
    console.log('참인 경우 출력');
}
else {
    console.log('거짓인 경우 출력');
}
// not defined와 undefined 는 다르다. 선언자체를 안 하면 오류가 터지지면, 
// 선언 이후에 값을 담지 않으면 undefined 
var num = 10;
console.log(typeof num);
num = String(num);
console.log(typeof num);
num = Boolean(num);
console.log(typeof num);

//number > boolean 
// 0 > false, 그 외의 숫자는 true 이다. 
//boolean > number
// true > 1, false > 0

// number > string 
// string > number 
// ex > 'abcd'를 숫자로 바꾸면? > NaN으로 바뀐다. (Not A Number)
var str = 'abcd';
str = Number(str);

console.log(typeof str, str)

var n = NaN;
console.log(NaN == NaN);
console.log(isNaN(n)); 
console.log(Number.MAX_VALUE); //JAVA의 double type의 Max 값과 동일

console.log(0/0, 3/0);
console.log(isFinite(3), isFinite(Number.POSITIVE_INFINITY));

n = null;
console.log(typeof n, n);

var fn = function(a, b) {
    return a + b;
};

var ret= fn(10, 20);
console.log(ret);
