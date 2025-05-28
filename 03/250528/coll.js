const arr = [1, 2, 3, 4];

const obj = {a:1, b:2};

const map = new Map();

map.set("a", 1); 
map.set("b", 2);
map.set("d", 3);
console.log(map);
console.log(map.get("a"));
console.log(map.has("a")); // contains key ? 
console.log(map.has("c"));

const key = map.keys();
console.log(key); //Iterator -> 반복할 수 있는 것으로 for of의 대상(자바로는 향상 for문)

for (let i of key) {
    console.log(i); // a , b , d가 순서대로 나옴
}

for (let i of map.values()) {
    console.log(i); // 1, 2, 3이 순서대로 나옴
}

for (let i of map.entries()) { //Map의 내부 인터페이스 Entry와 유사한 개념
    console.log(i); // i값 자체가 key와 value를 한 쌍으로 반환
    console.log(typeof i);
    console.log(i[0], i[1]); // []로 출력되면 보통 배열 같이 출력이 가능하다.
}




//iterable 하지 않은 것은 of를 할 수 없다. 
// 반복 가능하여야지 of 를 할 수 있다. 

//Java 에서는 Iterable 인터페이스로 배열, 리스트, Set을 정의함. 
//위 의 3개는 향상 for문을 사용 가능하다. 
// for(let i of arr) {
//     console.log(i);
// }

// for(let i of obj) {
//     console.log(i);
// }