function solution(nums) {
  const answer = [];

  // 앞에서 뒤로 ( i 만나기 전 까지 )
  for (let i = 0, temp = 1; i < nums.length; i++) {
    answer[i] = temp;
    temp *= nums[i];
  }

  // 뒤에서 앞으로 ( i 만나기 전 까지 )
  for (let i = nums.length - 1, temp = 1; i >= 0; i--) {
    answer[i] *= temp;
    temp *= nums[i];
  }
  return answer;
}

let nums = [1, 2, 3, 4];
let result = solution(nums);
console.log(result);
