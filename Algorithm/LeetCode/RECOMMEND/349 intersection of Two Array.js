function solution(nums1, nums2) {
  const answer = nums1.filter((n1) => nums2.includes(n1));
  return Array.from(new Set(answer));
}
