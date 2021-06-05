function solution() {
  let count = 0;
  nums[0] = nums[0].split("");
  nums[1] = nums[1].split("");

  for (let i = 0; i < nums[0].length; i++) {
    if (nums[0][i] !== nums[1][i]) {
      count++;
    }
  }
  console.log(count);
}

let nums = ["001", "001"];
solution();
