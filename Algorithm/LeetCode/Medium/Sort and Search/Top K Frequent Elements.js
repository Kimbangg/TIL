function solution(nums) {
  const map = new Map();
  const arr = [];
  const answer = [];

  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }

  for (const [key, value] of map) {
    arr.push([key, value]);
  }

  arr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    answer.push(arr[i][0]);
  }

  return answer;
}

let k = 2;
let nums = [1, 1, 1, 2, 2, 3];
console.log(solution(nums));
