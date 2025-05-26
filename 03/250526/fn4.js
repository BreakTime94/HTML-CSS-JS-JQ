const num = 10;
// num = 20; // const로 선언된 변수는 한 번 할당한 값은 수정 불가
console.log(num); 

const obj = {a:10, b:20};

obj.c = 30;
console.log(obj);

obj.a = 20;

console.log(obj);

const students = [];
const students1 = {no:1, name:'새똥이', score:80};
const students2 = {no:2, name:'개똥이', score:70};
const students3 = {no:3, name:'소똥이', score:90};

students.push(students1);
students.push(students2);
students.push(students3);

console.log(students);
students.splice(1, 1); // 1번 인덱스에서부터 1개 삭제

console.log(students);

//student1 = {}; 불가
obj.c = 20;  //가능

//const로 선언한 객체나 배열은 고유의 주소값을 가지는 것이어서 그 안의 property는 수정이 가능하나 그 자체 값을 변경하는 것은 불가! 주소 값을 변경하는 행위는 안됨

{
    const v = 10;
    console.log(v);
}

{
    const v = 20;
    console.log(v);
}
