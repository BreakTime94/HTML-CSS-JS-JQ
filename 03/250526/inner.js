//number, string, boolean
//function, object, undefined

function f(c) { // 즉 함수도 반환이 가능하다. 함수도 파라미터로 받아올 수 있다.
    let l = 10;
    // function inner() {
    //     return l + c
    // }
    // let inner = function(){
    //     return l + c;
    // }
    return function () {
        return l + c;
    }
}

const ret = f(10); // 이 친구는 함수 타입이다.

console.log(ret) //함수타입이므로 호출이 가능하다. 

console.log(ret());

console.log(f(30)());

//
function f3(c) {
    c();
} 

f3(function() {
    console.log("callback"); 
});

const arr = [3, 41, 5, 4, 2, 1];
arr.sort(function(a, b) {
    return b - a;
});
console.log(arr);