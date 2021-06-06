function checkParentheses(s) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[") {
      stack.push(s[i]);
    } else if (s[i] === ")" && stack) {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    } else if (s[i] === "]" && stack) {
      if (stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

function countParentheses(s) {
  const stack = [];

  for (let bracket of s) {
    if (bracket === "(" || bracket === "[") {
      stack.push(bracket);
    } else if (bracket === ")") {
      let sum = 0;
      let b = stack.pop();

      while (b !== "(") {
        if (b === "[") {
          console.log(0);
          return;
        } else if (!isNaN(b)) {
          sum += b * 2;
        }
        b = stack.pop();
      }
      sum = sum === 0 ? 2 : sum;
      stack.push(sum);
    } else if (bracket === "]") {
      let sum = 0;
      let b = stack.pop();

      while (b !== "[") {
        if (b === "(") {
          console.log(0);
          return;
        } else if (!isNaN(b)) {
          sum += b * 3;
        }
        b = stack.pop();
      }
      sum = sum === 0 ? 3 : sum;
      stack.push(sum);
    }
  }
  answer = stack.reduce((acc, value) => acc + value);
  return answer === 0 ? 0 : answer;
}

let s = "(( )[[]])([])".split("");
console.log(countParentheses(s));
