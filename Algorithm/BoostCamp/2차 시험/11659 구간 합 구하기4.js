function solution() {
  const prefix_sum = Array(nums + 1).fill(0);

  for (let i = 1; i <= nums.length; i++) {
    prefix_sum[i] = prefix_sum[i - 1] + nums[i - 1];
  }

  for (let i = 0; i < sections.length; i++) {
    const [start, end] = sections[i];

    console.log(prefix_sum[end] - prefix_sum[start - 1]);
  }
}

const nums = [5, 4, 3, 2, 1];

const sections = [
  [1, 3],
  [2, 4],
  [5, 5],
];

solution();
