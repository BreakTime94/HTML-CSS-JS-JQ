//map
const doubled = [1, 2, 3].map(v => v * 2);
console.log(doubled);
//filter
const evens = [1, 2, 3, 4].filter(v => v % 2 === 0);
console.log(evens);
//find

const firstEven = [1, 3, 4, 6].find(v => v % 2 === 0); // 조건에 맞는 것 중에 인덱스 값이 낮은 친구를 반환
console.log(firstEven);

//reduce (fn, 초기값)

const sum = [1, 2, 3, 4].reduce((prev, cur) => prev + cur, 0); //차원을 줄인다. 초기 값을 0으로 두고 1 + 2 + 3 + 4 로 10으로 합쳐버리면서 차원이 줄어든다.

console.log(sum);

//some, every >> boolean
console.log([1, 2, 3].some(v => v % 2 === 0)); // 배열요소의 일부가 짝수인지 ||
console.log([1, 2, 3].every(v => v % 2 === 0)); //배열요소의 전체가 짝수인지 &&

//includes
console.log([1, 2, 3].includes(1));
console.log([1, 2, 3].includes(4));

const users = [
    {name: '새똥이', age: 14},
    {name: '개똥이', age: 24},
    {name: '소똥이', age: 34},
]
//20세이상인 사람들의 이름만 추출 ['개똥이', '소똥이']

// map() 타입변경 객체 타입의 배열을 문자열 타입의 배열로 바꿔준다. 
console.log(users.filter(v => v.age >= 20)); 
console.log(users.filter(v => v.age >= 20).map(v => v.name));
console.log(users.filter(v => v.age >= 20).map(v => v.age));

//다음 코드의 문제점은? 
const arr = [1, 2, 3];
const result = arr.forEach(v => v * 2);
//const result = arr.forEach(v => arr2.push(v * 2));
//forEach 자체가 void 타입이다. (결과를 return 하지 않는다.) 
console.log(result); 

//이 배열을 가지고 짝수만 골라서 제곰으로 이루어진 배열을 반환

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(numbers.filter(v => v % 2 === 0).map(v => v * v));

//cart에 들은 상품들의 총 합계 계산 reduce 
const cart = [
    {item: "감자", qty :3, price : 1000},
    {item: "고구마", qty :2, price : 1500},
    {item: "양파", qty :5, price : 500}
]
console.log(cart.map(v => v.qty));
console.log(cart.map(v => v.price));
// console.log(cart.reduce(prev.qty, cur.qty), 0);

console.log(cart.reduce((prev, cur) => prev + cur.qty * cur.price, 0));

const ret = cart.reduce((prev, curr) => { //prev는 저 function을 반복하는 과정에서 여기에서 직전의 누적값 을 의미한다 
    console.log(prev, curr);
    return prev + curr.qty * curr.price
}, 0);
console.log(ret);

// 특정 조건의 첫 요소 찾기
//300페이지가 넘는 책의 이름을 조회(find)

const books = [
    {title: "JavaScript의 기초", pages: 120},
    {title: "ES6 완벽가이드", pages: 350},
    {title: "CSS 디자인", pages: 200},
    {title: "HTML5", pages: 400}
];
console.log(books.find(v => v.pages > 300).title);
//console.log(books.filter(v => v.pages >300).map(v => v.title));

//reduce 가장 고가의 상품 이름을 조회 >> 노트북
const products = [
    {name: "노트북", price: 1200000},
    {name: "키보드", price: 150000},
    {name: "마우스", price: 50000},
    {name: "모니터", price: 300000}
]
console.log(products[0]);
// console.log(books.filter(v => v.price >300).map(v => v.title));

// products.reduce((pre, cur) => { // 이미 pre가 숫자로 되어 있고 cur.pricer가 다음의 pre가 되어버린다.
//     return pre < cur.price ? cur : pre 
// }, 0);
console.log(products.reduce((pre, cur) => (pre > cur.price ? pre.name : cur.name ) , 0)); //얘는 왜 모니터가 나오지?
// console.log(products.reduce((pre, curr) => (pre.price >= curr.price ? pre : curr), 0).name); 

for (let i = 0; i <10; i++) {

}
const obj = {a: 1, b: 2};
for(let i in obj) { //인덱스 찾으면서 돌리는 for문
    console.log(obj[i]);
}
const arr3 = [10, 20, 30];

for(let i of arr3) { // 향상 for문
    console.log(i);
}
const now = new Date()
console.log(now);
console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());

