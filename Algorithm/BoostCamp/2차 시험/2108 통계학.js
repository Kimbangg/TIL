function solution() {
  nums.sort((a, b) => a - b);
  const map = {};

  // 산술 평균을 구하기 위한 합
  let total = nums.reduce((acc, value) => acc + value);
  total = Math.floor(total / nums.length);

  // 중앙 값을 출력한다.
  let center_idx = Math.floor(nums.length / 2);
  console.log(nums[center_idx]);

  // 최빈값

  const over_one = [];

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }

  for (const key in map) {
    if (map[key] > 2) over_one.push(key);
  }

  over_one.sort((a, b) => a - b);
  over_one.length === 0 ? console.log(1) : console.log(Math.max(...over_one));

  // 범위

  let diff = Math.max(...nums) - Math.min(...nums);
}

const n = 5;
const nums = [1, 3, 8, -2, 2];
solution();
// 1. 산술 평균 : N개의 수들의 합을 N으로 나눈 값
// 2. 중앙값: N개의 수들을 증가하는 순서로 나누었을 때, 중간
// 3. 최빈값: N개의 수들 중 가장 많이 나타나는 값
// 4. 범위 : N 최대 - 최소
