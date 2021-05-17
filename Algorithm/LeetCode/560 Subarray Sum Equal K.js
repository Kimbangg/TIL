function solution() {
  let count = 0;
  let sum = 0;
  const map = new Map([[0, 1]]);
  console.log(map);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

let nums = [1, 2, 1, 2, 1];
let k = 2;
console.log(solution());

//만약 투포인터를 사용한다고 하더라도,  j - i = > 길이 일 것 같은데
// 어떻게 하면 더 좋은 방법으로 답을 도출 할 수 있을까?

// How to Solve in time Complexity === O(n);
