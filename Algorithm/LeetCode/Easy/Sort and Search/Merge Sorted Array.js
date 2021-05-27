function solution(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (second < 0) {
      break;
    }

    if (nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      first--;
    } else {
      nums1[i] = nums2[second];
      second--;
    }
  }
  return nums1;
}

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;
console.log(solution(nums1, m, nums2, n));

// 1. How to merge?
// 어떻게 머지 할 수 있을까?
// if it is Linked List, 삽입과 삭제가 쉽지만 배열로 이루어져있어서 그것이 쉽지가 않음
//
