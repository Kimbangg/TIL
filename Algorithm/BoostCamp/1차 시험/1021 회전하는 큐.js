function solution(n, m, target) {
  let count = 0;
  const nums = Array.from({ length: n }, (v, i) => i + 1).map((e) => +e);

  while (target.length) {
    if (nums[0] === target[0]) {
      nums.shift();
      target.shift();
    } else {
      let target_idx = nums.indexOf(target[0]);
      let headDiff = target_idx - 0;
      let rearDiff = nums.length - target_idx - 1;

      if (headDiff < rearDiff) {
        nums.push(nums.shift());
        count += 1;
      } else {
        nums.unshift(nums.pop());
        count += 1;
      }
    }
  }

  return count;
}

const [n, m] = [10, 3];
const target = [2, 9, 5];
console.log(solution(n, m, target));
//  1 2 3 4 5 6 7 8 9 10

// 앞 자리랑 가까우면 2번을 써야하고 push(unshift)
// 뒷 자리랑 가까우면 3번을 써야해 unshift(pop);
