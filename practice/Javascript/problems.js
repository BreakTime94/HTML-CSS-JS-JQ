// 1번문제 
var nums = [100, 200, 300, 400, 500];
nums.pop();
nums.pop();
console.log(nums);

//2번문제 

var arr = [200, 100, 300]; 
arr.splice(2, 0, 10000) // 2번 인덱스에 0개를 삭제하고 10000을 추가한다.

console.log(arr);

//3번문제
var arr = [100, 200, 300]
// -> object type
console.log(typeof arr);

//4번문제 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?
// -> 2) number type 

//5번 문제 for문 계산
// -> 4) 16
var a = 10; 
var b = 2; 
for(var i=1; i<5; i+=2){
    a += i;
}
console.log(a + b);

//6번 문제
// 2)

//7번 문제
// 5) 3) 공동정답

//8번 문제
// 84 

//9번 문제

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second 

year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
console.log(result);

//10번 문제 (별 찍기) 
//     *
//    ***
//   *****
//  ******* 
var str = ' ';
var str2 = '*';
for(let i = 1; i < 9; i++) {
    
}

//11번 문제
let s = 0;

for(let i = 1; i <= 100; i++) {
    s += i;
}

console.log(s);

//12 게임 캐릭터 클래스 만들기

class Wizard {
    constructor(health, mana, armor){
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log("파이어볼!");
    }
}

const x = new Wizard(545, 210, 10);

console.log(x.health, x.mana, x.armor);

x.attack();




