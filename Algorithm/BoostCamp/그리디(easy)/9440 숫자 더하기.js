while (true) {
  const nums = [3, 4, 2, 2, 2, 2];

  if (nums.length === 0 && nums[0] === 0) {
    break;
  }

  let N = nums.shift();
  nums.sort((a, b) => b - a);

  if (nums.indexOf(0) !== -1) {
    let zero = 0;

    nums = nums.map(function (num, idx) {
      if (num === 0) {
        zero += 1;
        nums.splice(idx, 1);
      }
    });

    let first = nums.pop();
    let second = nums.pop();

    while (zero) {
      nums.push(0);
      zero -= 1;
    }
  }

  let res = 0;
  let pos = 1;

  for (let i = 0; i < nums.length; i++) {
    res += nums[i] * pos;

    if (i % 2 === 1) {
      pos *= 10;
    }
  }

  break;
}
