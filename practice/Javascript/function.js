
// console.log(f);
// let f = function add (x, y) {
//     return x + y;
// }

let add1 = (
    function () {
        let a = 10;
        return function (x, y) {
            return x + y + a;
        }
    }
)();

console.log(add1(2, 5));

let factorial = function f(n) {
    if(n <= 1) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(5))


console.log("===========13장 시작==========")
// 13장 스코프
 let x = 'global';

function foo () {
    let x = 'local';
    console.log(x);
}

foo();

console.log(x);

function foo1() {
  console.log("global function foo1");
}

function bar() {
  function foo2(){
    console.log("local function foo1")
  }
}

// JS는 함수를 어디서 정의 했는지에 따라 함수의 상위 스코프를 결정한다.
var y = 1;
function foo2() {
  var y = 10;
  bar1();
}

function bar1 () {
  console.log(y);
}

foo2();
bar1();