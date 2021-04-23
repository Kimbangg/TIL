function solution(stock) {
  let result = 0;
  let maxStock = stock[stock.length - 1];
  for (let i = stock.length - 2; i >= 0; i--) {
    if (stock[i] < maxStock) {
      result += maxStock - stock[i];
    } else {
      maxStock = stock[i];
    }
  }
  console.log(result);
}

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const T = Number(input[0]);

for (let i = 0; i < T; i++) {
  const N = Number(input[i]);
  let stock = [];
  for (let j = 0; j < N; j++) {
    stock[j] = Number(input[j]);
  }
  solution(stock);
}
