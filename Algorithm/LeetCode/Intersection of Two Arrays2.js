function solution(nums1, nums2) {
  const answer = [];

  for (let i = 0; i < nums2.length; i++) {
    if (nums1.includes(nums2[i])) {
      answer.push(nums2[i]);
      nums1.splice(nums1.indexOf(nums2[i]), 1);
    }
  }

  return answer;
}

let nums1 = [2, 2];
let nums2 = [1, 2, 2, 1];

console.log(solution(nums1, nums2));
