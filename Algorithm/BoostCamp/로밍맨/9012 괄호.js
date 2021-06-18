function solve(test_case, forChecked) {
  for (let i = 0; i < test_case; i++) {
    const stack = [];
    forChecked[i] = forChecked[i].split("");

    for (let j = 0; j < forChecked[i].length; j++) {
      let current = forChecked[i][j];

      if (current === "(") {
        stack.push("(");
      } else {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          stack.push(")");
        }
      }
    }
    stack.length === 0 ? console.log("YES") : console.log("NO");
  }
}

let test_case = 3;

let forChecked = ["(())())", "(((()())()", "(()())((()))"];

solve(test_case, forChecked);
