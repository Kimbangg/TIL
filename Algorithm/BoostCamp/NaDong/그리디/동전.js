function solution(n, coins) {
  let count = 0;

  for (let i = 0; i < coins.length; i++) {
    count += parseInt(n / coins[i]);
    n %= coins[i];
  }
  console.log(count);
}

let n = 1260;
let coins = [500, 100, 50, 10];
console.log(solution(n, coins));
