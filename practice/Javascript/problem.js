var nums = [100, 200, 300, 400, 500];

// 인덱스가 홀수인 애들만 지운다고 하면? 지금은 배열이 5개인데 만약 배열 길이가 100개면?


nums.filter(function(_, idx) => idx % 2 === 0);

nums.splice(function(){
    
}, 1)

console.log(nums);



