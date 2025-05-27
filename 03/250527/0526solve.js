//1 undefined 

//2 var let const 선언, 할당 var만 재 선언 가능

//3 1번

//4 undifined 

//5 "35"

//6 가능. console.log(hello), console.log(hello())도 가능 toString도 가능

//7 4번 1name 은 사용불가 변수라서 "1name" 이라고 한다. 
// 2번 let은 변수명으로 쓸 수는 있으나 추천하지 않는다. 

//8 안녕하세요 손님님 (default 값인 name "손님"이 들어간다.)

//9 객체가 바뀌지는 않지만, 필드의 값은 바뀐다. 
 
//12 생성자 함수/ 객체 리터럴 방식의 차이를 설명하시오. 

// 생성자 함수는 필드에 들어갈 사전 초기화 및 포함될 값의 강제성 등을 부여할 수 있다.

//13 
function Student(name) {
    this.name = name;
}
Student("abcd").name; // 오류 뜸. 왜냐? return이 없는데 그 필드를 호출하려고 하면 문제가 된다.

//14 hoisting에 의하여, undefined ?

//15 1번

//16 안된다. 

//17 2, 3 (엄밀히 따지면 3번)

//18. user.name 

//19. 99 주소값을 복사하였기에 b의 필드를 바꾸면 a의 필드값도 바뀐다. 

//20. 2번 생성자 함수는 선언식 함수로 사용한다.
