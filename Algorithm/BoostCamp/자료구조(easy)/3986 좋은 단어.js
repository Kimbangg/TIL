function solve() {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const stack = [];
    s[i] = s[i].split("");

    for (let j = 0; j < s[i].length; j++) {
      if (stack[stack.length - 1] === s[i][j]) {
        stack.pop();
        continue;
      }

      stack.push(s[i][j]);
    }

    if (stack.length === 0) {
      answer += 1;
    }
  }
  return answer;
}

const s = ["ABAB", "AABB", "ABBA"];
solve();
