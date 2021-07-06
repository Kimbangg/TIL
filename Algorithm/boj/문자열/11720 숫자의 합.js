function solution() {
  let total = 0;
  nums = nums.split("").map((e) => +e);

  for (let i = 0; i < 25; i++) {
    total += nums[i];
  }

  console.log(total);
}

const n = 25;
let nums = "7000000000000000000000000";
solution();
