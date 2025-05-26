let obj = {name: '홍길동', age: 20,
    printOut: function() {

    }
};
console.log(obj);
console.log(obj.name);

//객체 관련 연산자 

//객체에 프로퍼티 추가 

obj.tel= "010-1111-2222"; 

console.log(obj.tel);
console.log(obj); 

//객체에 프로퍼티 제거 연산자

delete obj.age;
console.log(obj);

//객체내의 프로퍼티 확인 연산자

console.log("tel" in obj); //boolean type으로 나옴
console.log("age" in obj);

//spread operator (전개 영상) art
const num = 10;
const obj1 = {a:1, b:2, num:num, "abc-def":10}; 
obj1.a; //이게 원래방법
obj1["a"]; // 연관 배열 (객체도 배열처럼 접근 가능)
const str = "가나다라";
const obj2 ={str:str, c:3}; //{a:1, b:2, c:3} 프로퍼티 명과 프로퍼티 값이 같을때는 이렇게 표현

const obj3 = {...obj1, c:3} //전개 연산

console.log(obj2);
console.log(obj3);

console.log(obj["abc-def"]); //이렇게 표현 가능. html의 태그 및 여러 속성들 중 하이픈이 들어가는 것이 많으므로..로 추정!
//distribute 연산 (분해 연산)

function fn(p1, p2, ...a) {
    let sum = "";
    for(let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
// p1 p2를 사용하지 않았기에 1번 2번은 출력되지 않는다.
// 자바의 함수 호출방법 
/* 
static int m()
*/

function fn2(...a) {
    let sum = "";
    for(let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
// 모든 인자를 다 사용한다는 뜻.

console.log(fn("값1", "값2", 10, 20, 30)); //102030
console.log(fn2("값1", "값2", 10, 20, 30)); // 값1값2102030

Math.random(); //기능을 호출하기 위한 목적
//new Math(); // 얘는 생성자 자체가 존재하지 않음. 자바는 private으로 숨겨놓음


