//this: 미래에 생성될 객체의 주소값

function Student(no, name = "소똥이", score = 100) { // 생성자함수와 class는 첫 글자를 대문자로 사용한다.
    this.no = no; //|| 1; //들어온 값이 undefined일 경우에만 false로 인식되어 기본값인 1이 나온다.
    this.name = name;
    this.score = score;
}

const student = new Student(1, "새똥이", 90); 

console.log(student);
console.log(student.name);

const students = [];
students.push(student);
students.push(new Student(2, "개똥이", 70));
students.push(new Student(3));
students.push(new Student());
students.push(new Student(5, '말똥이', 95, 1050));


console.log(students);
console.log(students[3]);


