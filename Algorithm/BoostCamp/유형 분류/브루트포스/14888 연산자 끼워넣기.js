function operation(num1, num2, operator) {
  switch (operator) {
    case 0:
      return num1 + num2;
    case 1:
      return num1 - num2;
    case 2:
      return num1 * num2;
    case 3:
      const result =
        num1 >= 0 ? Math.floor(num1 / num2) : -Math.floor(-num1 / num2);
      return result;
  }
}

function dfs(idx, result, operators) {
  if (index === nums.length) {
    max = Math.max(max, result);
    min = Math.min(min, result);
  }

  for (let i = 0; i < 4; i++) {
    if (operators[i] > 0) {
      const newOpers = JSON.parse(JSON.stringify(operators));
      newOpers[i] -= 1;
      dfs(idx + 1, operation(result, numbers[idx], i), newOpers);
    }
  }
}

const n = 2;
const nums = [5, 6];
const operators = [0, 0, 1, 0]; //  +  -  *  %

let max = -Infinity;
let min = Infinity;

dfs(1, nums[0], operators);
console.log(max ? max : 0);
console.log(min ? min : 0);
