function solution(coins) {
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= target; j++) {
      if (dp[j - coins[i]] != 10001) {
        d[j] = Math.min(d[j].d[j - coins[i]] + 1);
      }
    }
  }
}

let target = 15;
let coins = [2, 3];
const dp = Array(target).fill(10001);
dp[0] = 0;
console.log(solution(coins));

// not using Dynamic Programming
// function solution() {
//   let count = 0;
//   coins = coins.sort((a, b) => b - a);

//   for (let i = 0; i < coins.length; i++) {
//     if (target === 0) {
//       break;
//     }

//     if (coins[i] > target) {
//       continue;
//     }

//     if (target % coins[i] === 0) {
//       count += target / coins[i];
//       target %= coins[i];
//       console.log();
//       continue;
//     } else {
//       target -= coins[i];
//       count++;
//     }
//   }

//   return target !== 0 ? -1 : count;
// }
