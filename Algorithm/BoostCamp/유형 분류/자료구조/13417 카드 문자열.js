function solve() {
  const answer = [s[0]];

  for (let i = 1; i < s.length; i++) {
    let left = answer[0];

    if (s[i] <= left) {
      answer.unshift(s[i]);
    } else {
      answer.push(s[i]);
    }
  }
  console.log(answer);
}

let s = ["B", "A", "C", "A", "B", "A", "C"];
solve();
