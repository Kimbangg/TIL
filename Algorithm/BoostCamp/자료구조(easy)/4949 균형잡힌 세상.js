function solve() {
  for (let i = 0; i < s.length; i++) {
    const stack = [];
    s[i] = s[i].split("");

    for (let j = 0; j < s[i].length; j++) {
      if (s[i][j] === "(" || s[i][j] === "[") {
        stack.push(s[i][j]);
      } else if (s[i][j] === "]") {
        if (stack[stack.length - 1] === "[") {
          stack.pop();
        } else {
          stack.push(s[i][j]);
        }
      } else if (s[i][j] === ")") {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          stack.push(s[i][j]);
        }
      }
    }
    stack.length === 0 ? console.log("YES") : console.log("NO");
  }
}

let s = [
  "So when I die (the [first] I will see in (heaven) is a score list).",
  "[ first in ] ( first out ).",
];

solve();
