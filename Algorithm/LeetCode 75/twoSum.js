function solution() {
  const prev = [];

  for (let i = 0; i < nums.length; i++) {
    const tmp = target - nums[i];

    if (tmp in prev) {
      return [prev[tmp], i];
    }

    prev[nums[i]] = i;
  }
}

let nums = [3, 2, 3];
let target = 6;
console.log(solution());
