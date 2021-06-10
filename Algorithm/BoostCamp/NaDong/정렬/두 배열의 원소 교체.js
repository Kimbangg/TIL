function solution(K, nums1, nums2) {
  let answer = 0;

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => b - a);

  for (let i = 0; i < K; i++) {
    nums1[i] = nums2[i];
  }

  answer = nums1.reduce((acc, value) => acc + value);

  return answer;
}

let K = 3;
const nums1 = [1, 2, 5, 4, 3];
const nums2 = [5, 5, 6, 6, 5];

console.log(solution(K, nums1, nums2));
