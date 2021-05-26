function solution(nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }

  for (let key in map) {
    if (map[key] === 1) {
      return key;
    }
  }
}

let nums = [4, 1, 2, 1, 2];
console.log(solution(nums));

// O(n) 풀이 방법인데, 이런건 더 줄일 수도 있지 않을까?
