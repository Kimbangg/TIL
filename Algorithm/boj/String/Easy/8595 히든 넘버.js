function solution() {
  let tmp = "";
  let answer = 0;
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i]))) {
      if (tmp) {
        answer += parseInt(tmp);
        tmp = "";
      }
      continue;
    } else {
      tmp += s[i];
    }
  }
  return answer;
}

let s = "ab13c9d07jeden";
console.log(solution());

// 어떻게 문제를 해결 할 수 있을까?

//13 9 0 7
