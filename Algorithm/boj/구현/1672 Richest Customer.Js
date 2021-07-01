// by using 2 layers for loop

function solution(accounts) {
  let sumAccounts = [];
  let result = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    sumAccounts.push(sum);
  }

  let result = Math.max(...sumAccounts);
  return result;
}

let accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

solution(accounts);

// more javascriptive

function solution() {
  let max = 0;

  for (let i = 0; i < accounts.length; i++) {
    let sum = accounts[i].reduce((x, y) => x + y);

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}
