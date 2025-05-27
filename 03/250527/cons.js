// 생성자 함수

//Student 프로퍼티의 갯수 7개 

//이 중 총점과 평균은 function type이다. 

// 이 function type은 프로토타입을 통해 분리를 시킬 수가 있다. 

// 학번, 이름, 국영수 5개의 프로퍼티는 순수자료이지만, 이 자료를 토대로 가공한 function을 메서드로 빼는 것과 같음

 function Student(no, name, kor, eng, mat) {
            this.no = no;
            this.name = name;
            this.kor = kor;
            this.eng = eng;
            this.mat = mat;
        }

        Student.prototype.total = function() {
                return this.kor + this.eng + this.mat;
            }
        Student.prototype.avg = function() {
                return this.total() / 3; 
            }
        //프로토타입 : 함수를 통해 생성된 객체(new)의 공용 공간
        Student.prototype.test = 10; //
        Student.test = 20; // 자바의 static과 비슷한 느낌이다.
        Student.fn = function() {
            return "하이"
        }
        const s = new Student(1, "새똥이", 80, 90, 100);
        console.log(s.total)
        console.log(s.total());
        console.log(s.test);
        console.log(Student.test)
        console.log(Student.fn()); //함수는 1급객체이다. 본인만의 필드를 가질 수가 있다. 함수는 객체의 필드로 적용할 수 있으면서 본인만의 필드도 가질 수도 있다.

        const arr = [1, 2, 3, 4]; // 배열에 size라는 기능이 없지만 그런 기능을 프로토타입으로 정의하는 방법.
        Array.prototype.size = function() {
            return this.length;
        }
        console.log(arr.size());
        Object.prototype.fn = function() {
            return 10;
        }
        console.log({}.fn());
        console.log("abcd".substring(1, 2));

        const num = 10; 
        console.log(num.toFixed(2)); //toFixed(n) 소수점 n번째 자리까지

        



