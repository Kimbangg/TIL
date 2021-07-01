function solution() {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < m; i++) {
    let left = 0;
    let right = n - 1;

    while (left <= right) {
      const mid = Math.floor(left + right);

      if (nums[mid] === m_nums[i]) {
        console.log(1);
        break;
      }
    }
  }
}

const n = 5;
const nums = [4, 1, 5, 2, 3];
const m = 5;
const m_nums = [1, 3, 7, 9, 5];

solution();
