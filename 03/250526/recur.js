function factorial(n) {
    let result = 1;
    if(n == 0) {
        return result;
    }
    else {
       return result *= n * factorial(n-1);
    }
}

console.log(factorial(5));

// url
//프로토콜://도메인:포트/경로/파일?쿼리스트링#앵커
//https://localhost:5500/03/250526/test.html?color=#002345&name=새똥이 %23은 escape code로 #을 의미한다.
//https://localhost:5500/03/250526/test.html?color=%23002345

let url = 'https://localhost:5500/03/250526/test.html?color=%23002345&name=새똥이';

console.log(url);
console.log(encodeURI(url));
console.log(encodeURIComponent(url)); // 보이는 모든 특수문자 encoding 처리

console.log(decodeURIComponent(console.log(encodeURIComponent(url))));

//반복문 무한루프

//재귀호출 스택오버플로우

//parseInt(문자열) : 숫자 >> 정수만 
//parseFloat(문자열) : 숫자 >> 실수포함
let str = "123.456가나다";
console.log(parseInt(str)); // 일반문자가 포함되어 있어도 진행. parse 못하는 부분은 무시됨. 시작하는 위치 0번인덱스에서 해석 못하는 문자가 나오면 바로 NaN 처리!
console.log(parseFloat(str)); 

str = "ff"; // 뒤에 콤마가 들어가면 진수로 처리된다.
console.log(parseInt(str, 16));

str = 'A';
console.log(parseInt(str));

let s = String.fromCharCode(65, 66);

// eval("console.log(10"); //문자를 자바스크립트 코드로 변경해주는 함수인데 굉장히 취약하고 안쓴다.

console.log(s);
console.log(s.charCodeAt(1)); //1번 인덱스