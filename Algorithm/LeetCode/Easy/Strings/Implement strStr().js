// 내장함수 사용
function solution(haystack, needle) {
  return haystack.indexOf(needle);
}

// indexOf 직접구현
function solution(haystack, needle) {
  if (!needle.length) return 0;

  let resultIndex = -1;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let tmp = haystack.substring(i, i + needle.length);
      if (tmp === needle) {
        resultIndex = i;
        return resultIndex;
      }
    }
  }
  return resultIndex;
}

let haystack = "hello";
let needle = "ll";
console.log(solution(haystack, needle));
