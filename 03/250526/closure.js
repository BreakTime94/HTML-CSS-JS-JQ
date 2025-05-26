function add() {
    let n = 0;
    return function() {
        return ++n;
    }
}

const increase = add(); // increase의 type은 function type 
// closure : 함수 호출완료 이후에도 지역변수가 잔존하는 현상 
// 최소 선행 조건: 함수를 리턴하여야 한다. 
console.log(increase());
console.log(increase());
console.log(increase());

const increase2 = add(); 
console.log(increase2());
console.log(increase2());
console.log(increase2());
