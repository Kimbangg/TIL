function solve() {
  const answer = [];
  let sum = Array(nums.length + 1).fill(0);

  for (let i = 1; i <= nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i - 1];
  }

  for (let i = 0; i < section.length; i++) {
    const [start, end] = section[i];

    answer.push(sum[end] - sum[start - 1]);
  }
  return answer.join("\n");
}

let [N, M] = [5, 3];
const nums = [5, 4, 3, 2, 1];

const section = [
  [1, 3],
  [2, 4],
  [5, 5],
];

console.log(solve());
