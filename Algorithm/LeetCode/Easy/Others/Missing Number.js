function solution(nums) {
  let answer;
  const arr = Array.from({ length: nums.length + 1 }, (v, i) => i);
  nums = nums.sort();
  answer = arr.filter((each) => !nums.includes(each));

  return answer;
}

let nums = [3, 0, 1];
console.log(solution(nums));
