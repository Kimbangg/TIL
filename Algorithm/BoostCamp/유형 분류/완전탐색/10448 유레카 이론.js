function solve() {
  //
  for (let i = 1; i <= 44; i++) {
    for (let j = 1; j <= 44; j++) {
      for (let k = 1; k <= 44; k++) {
        dp[triangle[i] + triangle[j] + triangle[k]] = 1;
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (dp[nums[i]]) {
      console.log(1);
      continue;
    }

    console.log(0);
  }
}

const nums = [10, 20, 1000];
const triangle = Array(45).fill(0);

for (let i = 1; i < triangle.length; i++) {
  triangle[i] = (i * (i + 1)) / 2;
}

const dp = Array(1001).fill(0);
solve();
