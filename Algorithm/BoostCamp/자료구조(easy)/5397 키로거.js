function solve() {
  s = s.split("");
  const leftStack = [];
  const rightStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "<") {
      if (leftStack.length === 0) {
        continue;
      } else {
        rightStack.push(leftStack.pop());
      }
    } else if (s[i] === ">") {
      if (leftStack.length === 0) {
        continue;
      } else {
        leftStack.push(rightStack.pop());
      }
    } else if (s[i] === "-") {
      if (leftStack.length !== 0) {
        leftStack.pop();
      }
    } else {
      leftStack.push(s[i]);
    }
  }
  console.log(leftStack.join("") + rightStack.reverse().join(""));
}

let s = "ThIsIsS3Cr3t";
solve();
