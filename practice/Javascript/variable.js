let sum = undefined;

console.log(typeof sum)

sum = null;

console.log(typeof sum);

let first = "holy"

let last = "moly"

console.log(`이런 젠장 ! ${first}${last}`)

console.log(sum instanceof Object);

console.log(2 ** 4)
sum = '4'
console.log(sum)
console.log(typeof +sum)
console.log(sum + 0)


var x, y, z;

x = 1, y = 2, z = 3;

console.log(x, y, z);


let name = '홍길동';
let age = '30';
console.log(`이름 : ${name}, 나이 : ${age}`);

console.log([x, y, z] + '');
console.log([x, y, z]);
console.log([]);

console.log(Math + '');
console.log(Array + '');

console.log('10'/'1');

console.log(+true);
console.log(true + 3);

// if(o) {
//   console.log("명시적 형변환")}
// //암묵적 형변환을 활용한 단축평가가 아주 유용하다.

let done = true
let message = '';

message = done && 'true면 완료라고 쓰는거';

console.log(message);

done = false;
message = done || 'false가 나오면 거짓이라고 뜰겨';
console.log(message)

console.log(done.value)

let o = {a : 1, b: 3};
// .? optional chainning 연산자, ?? null 병합 연산자
let value = o?.value;
console.log(value); //undefined가 나온다. o는 value라는 프로퍼티가 없다. 이 친구는 태그와 함께 쓰는게 유용해보인다.

let foo = null ?? 'default setting';
let foo1 = undefined ?? 3;
let foo2 = '' ?? '기본 값';
console.log(foo, foo1, foo2) // 기존에 null 병합 연산자가 없었을 때는, 논리 연산자 ||로 기본값을 처리하였으나, 0이나 '' 빈문자열이 나왔을 경우 의도치 않게 작동하였다.




