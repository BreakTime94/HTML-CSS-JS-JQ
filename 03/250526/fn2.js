function max(a, b, c) {
    console.log(arguments);
    //arguments는 객체이지만 배열처럼 사용할 수 있는 객체. 유사배열 or 연관배열이라고 부름
    var ret = arguments[0];
    for(var i = 0; i < arguments.length; i++) {
        if (ret < arguments[i]) {
            ret = arguments[i];
        }
    }
    return ret;
}
console.log(max());
// console.log(max(30, 40, 50, 70, 120, 50)); // arguments를 사용하면 인자 갯수의 제한을 받지 않는다. 점점 늘어나도 가능

function test(a, b) {
    console.log(a, b);
}
test();// undefined 2개로 출력

//숫자 하나를 입력 받아서 절대값 출력

var abs = function(a) {
    return a > 0 ? a : -a;
}

abs = (a) => {
    return a > 0 ? a : -a
}
//arrow function : 익명함수의 대체, es6(2015)
abs = (a) => a > 0 ? a : -a; 

//배열생성 자바의 리스트와 유사 
var arr = [3, 2, 1, 5, 4];

arr.sort((a, b) => b - a); //내림차순 정렬

console.log(arr);

arr.forEach(a => console.log(`내부의 값은 ${a}`));

arr.filter(a => a % 2 ==1).map(a => "값은" + a).forEach(a => console.log(a));

//scope 범위
//전역변수(global variable), 지역변수(local variable)