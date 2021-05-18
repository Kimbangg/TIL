// 해시를 이용한 문제 풀이
function solution(nums) {
  let map = {};
  let maxCount = parseInt(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }

  let objectLength = Object.keys(map).length;

  return objectLength <= maxCount ? objectLength : maxCount;
}

// set 함수를 이용한 문제풀이
function solution(nums) {
  let maxCount = parseInt(nums.length / 2);
  const variety = [...new Set(nums)];

  return variety.length <= maxCount ? variety.length : maxCount;
}

let nums = [3, 3, 3, 2, 2, 2];
console.log(solution(nums));
