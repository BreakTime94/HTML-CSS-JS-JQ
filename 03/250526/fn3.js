// var num = 10;
// str ='새똥이';
console.log(typeof num)
function f() {
    // console.log(num); // 함수내에서 자체 hoisting을 진행하므로, 지역변수를 새로 정의하면 그 안에서 이름이 같은 것만 찾는다.
    num = 20;
    console.log(num);
}
f();
console.log(num);
console.log(str);
// 지역의 위치에서 var, let이 없이 선언 가능. 키워드 생략시 전역의 위치에 선언
// es5 이전까지는 이 현상을 막을 방법이 없음

//var 키워드, 선언적함수는 hoisting의 대상, 함수 레벨 scope 
(function() {
    for(var i = 0; i < 10; i++) {
    
    }
})();
// console.log(i); //이렇게 하면 i값이 저장되지 않는다.

if(true) {
    let test = 10;
}

// console.log(test); 

//위와 같은 상황을 막아주는 변수선언 방식이 let이다. let 키워드는 문법적 엄격성을 갖게해주는 선언방법이다. 

var str = "abcd";
var str = '가나다라';

let str2 ="abcd";
str2 = 30;