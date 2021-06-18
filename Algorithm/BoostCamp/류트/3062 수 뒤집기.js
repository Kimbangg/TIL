function solve(num) {
  const reversedNum = Number(num.split("").reverse().join(""));

  let total = String(Number(num) + reversedNum);
  let reversedTotal = total.split("").reverse().join("");

  total == reversedTotal ? console.log("YES") : console.log("NO");
}

const nums = ["13", "58", "120", "5056"];

for (let i = 0; i < nums.length; i++) {
  solve(nums[i]);
}
