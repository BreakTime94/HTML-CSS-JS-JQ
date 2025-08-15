
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

// ---- 15장 let과 const

console.log("=======15장 let과 const ==========")

// console.log(nani) 이 친구는 애초에 ReferenceError가 터짐

//let과 const는 변수 hoisting이 안 일어나는 것처럼 보이지만 이뤄진다. 다만 temporal dead zone이 존재하여, 선언 이후 값이 초기화되기 전에 참조를 하려고 하면
// 에러를 빵 터뜨린다!
let nani;

console.log(nani)

nani = "나아니이";

console.log(nani)

console.log("===============16장 프로퍼티와 어트리뷰트==========")

const obj1 = {name : "kim"}

console.log(Object.getOwnPropertyDescriptor(obj1, "name"));

obj1.age = 30;

console.log(Object.getOwnPropertyDescriptors(obj1));

const person = {
  firstName : 'Chan',
  LastName : 'Kim',

  get fullName() {
    return `${this.firstName} ${this.LastName}`;
  },
  set fullName(name) {
    return [this.firstName, this.LastName] = name.split(" ");
  }
};

console.log(person.firstName + ' ' + person.LastName);

console.log(person.fullName);

person.fullName = "야 인마"; // 프로퍼티는 함수 호출이 되지 않는다. 값을 저장하면 그 값에 따라서 호출이 된다

console.log(person);

console.log(person.fullName);

console.log(Object.getOwnPropertyDescriptor(person, "firstName"));
console.log(Object.getOwnPropertyDescriptor(person, "fullName"));





