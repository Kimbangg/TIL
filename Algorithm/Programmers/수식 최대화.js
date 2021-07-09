function solution(expression) {
  const prior = [
    ["-", "*", "+"],
    ["-", "+", "*"],
    ["*", "-", "+"],
    ["*", "+", "-"],
    ["+", "-", "*"],
    ["+", "*", "-"],
  ];

  const cand = [];

  for (let opCand of prior) {
    const temp = expression.split(/(\D)/);
    for (let exp of opCand) {
      while (temp.includes(exp)) {
        const idx = temp.indexOf(exp);
        temp.splice(idx - 1, 3, eval(temp.slice(idx - 1, idx + 2).join("")));
      }
    }
    cand.push(Math.abs(temp[0]));
  }
  return Math.max(...cand);
}

const expression = "100-200*300-500+20";
console.log(solution(expression));
