function solve() {
  expression = expression.split("-");

  for (let i = 0; i < expression.length; i++) {
    if (expression[i].includes("+")) {
      let tmpArr = expression[i].split("+").map((e) => +e);
      expression[i] = tmpArr.reduce((acc, value) => acc + value);
    }
  }

  let answer = Number(expression[0]);

  for (let i = 1; i < expression.length; i++) {
    answer -= expression[i];
  }
  console.log(answer);
}

let expression = "55-50+40";
solve();
