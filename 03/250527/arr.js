let arr = [10, 20, 30, 40, 50, 60, 70];
console.log(arr.length);
console.log(arr[0]);
console.log(arr.slice(2, 4));
console.log(arr.join("-"));
console.log(arr.concat(["가", "나", "다"]));

//배열의 값 추가
arr.push(1);
console.log(arr);
arr.unshift(10);
console.log(arr);
arr.pop();
arr.pop();
arr.pop();
console.log(arr);
arr.shift();
arr.shift();
arr.shift();
console.log(arr);

arr.splice(1, 0, 10);
console.log(arr);

arr.splice(2, 1); 
console.log(arr);

arr.splice(0, 1, 20, 30, 40);
console.log(arr);

arr.reverse();

console.log(arr);
console.log();

arr.sort(function(a, b) { // arrow function으로 써도 좋음
    return b - a;
})

//forEach, map, filter, find, some, every, reverse, includes, findIndex
//위의 내림차순으로 정리 되어 있으며, b는 0번 인덱스 a는 그 인덱스에 해당하는 값, c는 배열 전체를 반환한다.
arr.forEach(a => console.log(a))
//메서드 참조도 가능 함수를 통째로 던짐.
arr.forEach(console.log) // 처음 function으로 a, b, c 설정한 값이 나온다.





