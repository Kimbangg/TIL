function solution() {
  const set = new Set(nums);

  if (set.size !== nums.length) {
    return true;
  }

  return false;
}

let nums = [1, 2, 3, 4];
let result = solution();

console.log(result);
