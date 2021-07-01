function solution() {
  nums[0] = parseInt(nums[0].split("").reverse().join(""));
  nums[1] = parseInt(nums[1].split("").reverse().join(""));

  nums[0] += nums[1];
  nums[0] = String(nums[0]);

  return nums[0].split("").reverse().join("");
}

let nums = ["123", "100"];
console.log(solution());
