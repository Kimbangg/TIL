function solve() {
  const stack = [];
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
        continue;
      }
    }
    stack.push(s[i]);
  }
  console.log(stack.length);
}

let s = ")(()(()))";
solve();
