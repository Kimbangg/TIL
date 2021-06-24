function solution() {
  let tmp = 0;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "O") tmp += 1;
    else {
      tmp = 0;
    }
    answer += tmp;
  }
  console.log(answer);
}

let s = "OOXXOXXOOO";
solution();
