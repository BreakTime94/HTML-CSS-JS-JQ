//
const obj = new Object(); // const obj = {}; 랑 같음
obj.a = 10;
console.log(obj);

const arr = new Array(); //길이가 0인 배열

//List<Studens> students; 
// students.get(0).getNo();

//자바스크립트 식으로 
//Javascript Object Notation 
//줄여서 JSON 
const students = [{no:1}, {no:2}];
console.log(students[1].no);

[   
    {className : '우리반'},
    {
        no:1,
        name:'새똥이',
        score: {
            kor : 90,
            eng : 80
        }
    },
    {
        no:2,
        name:'개똥이'
    }
]

// 객체 리터럴의 단점 (객체의 속성 규칙이 없이 마구잡이로 들어가는 것이 가능하다.)
[
    {no: 1},
    {no: 2, nmae:'개똥이'}
]

//그렇기에 생성자 함수가 필요하다. 



