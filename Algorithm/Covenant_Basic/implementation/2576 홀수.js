let nums = [12, 77, 38, 41, 53, 92, 85];
let sum = 0;
let odd = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 !== 0) {
    sum += nums[i];
    odd.push(nums[i]);
  }
}

console.log(sum);
let min = Math.min(...odd);
console.log(min);
