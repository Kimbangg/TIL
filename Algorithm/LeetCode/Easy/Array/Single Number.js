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
// O(logn)으로 가려면 하나의 값을 찾는, 즉 전체 배열을 다 보지 않아도 되는 경우에 가능
// 결과적으로 우리는 모든 배열을 탐색하여, 1개만 있는 경우를 찾아야 하기에, 이 아래로 내려가기가 쉽지는 않을듯 