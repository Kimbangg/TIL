function solve() {
  nums.sort();

  const negative = [];
  const positive = [];
  const hasZero = nums.includes(0);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) negative.push(nums[i]);
    else positive.push(nums[i]);
  }

  negative.sort((a, b) => a - b);
  positive.sort((a, b) => b - a);

  let sum = 0;

  for (let i = 0; i < positive.length; i++) {
    const current = positive[i];
    const next = positive[++i];

    if (next) {
      if (current === 1 || next === 1) {
        sum += current + next;
      } else {
        sum += current * next;
      }
    } else {
      sum += current;
    }
  }

  for (let j = 0; j < negative.length; j++) {
    const current = negative[j];
    const next = negative[++j];

    if (next) {
      sum += current * next;
    } else {
      if (hasZero) {
        continue;
      } else {
        sum += current;
      }
    }
  }

  console.log(sum);
}

const nums = [-3, -2, -1, 0, 1, 2, 3, 4];
solve();
