function solve() {
  let cnt = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] !== s[i]) {
      cnt += 1;
    }
  }
  return Math.ceil(cnt / 2);
}

let s = "0000110000";
console.log(solve());
