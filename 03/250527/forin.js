//for문을 사용할때, for...in 이라는 문법이 있다. 

const obj = {a: 10, b: 20, c:30}; // 자바의 객체는 MAP과 유사한다. 
const str = "f";
obj.d = 40; //가능 
obj["e"] = 50; //프로퍼티명으로 프로퍼티 생성
obj[str] = 60;
console.log(obj.toString()); //기본 toString이다. 
console.log(obj);

for(let i in obj) { // for in은 객체 찾기의 필수품
    console.log(i, obj[i]); 
}

//연관배열 객체를 배열처럼 다루기!

class Addr { //클래스 문법 잘 사용하지는 않는다.
    #no; //필드 숨길때 사용
    constructor(no, name, desc) { //생성자 함수와의 차이점은 무조건 new를 통해서 호출해야한다는 점이다. 
        //ex Addr(2, "개똥이", "구로구")는 안된다. 이 앞에 new를 붙여야 한다. 
        this.#no = no;
        this.name = name;
        this.desc = desc;
    }
    print() {
        console.log(this.#no, this.name, this.desc);
        return "반환테스트";
    }
    //get, set 문법이 있음
    get no() {
        return this.#no;
    }
    set no(no) {
        this.#no = no;
    }
}

const addr = new Addr(1, "새똥이", "부천시");
console.log(addr.print());
//자바스크립트는 호출은 
addr.no = 10;
console.log(addr.no);
console.log(addr);

function Card(kind, number) { //생성자 함수에서도 비슷한 방법으로 할 수 있다.
    let k = kind; 
    this.getKind = function() {
        return this.k;
    }
    this.setKind = function(kind) {
        return this.k = kind;
    } 

}
for(let i in addr) {
    console.log(i);
}
