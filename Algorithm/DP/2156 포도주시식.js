var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

var N = parseInt(input.shift());
var arr = input.map(Number);
var zero = [0, 0, 0, 0];
//console.log(arr);

var dp = new Array(N);
dp[0] = 0;

function fnDF(x) {
  dp[1] = arr[0];
  dp[2] = dp[1] + arr[1];

  for (var i = 3; i <= x; i++) {
    dp[i] = Math.max(
      dp[i - 1],
      dp[i - 2] + arr[i - 1],
      dp[i - 3] + arr[i - 2] + arr[i - 1]
    );
  }
  //console.log(dp);
  //console.log(dp[6]);
  return dp[x];
}

console.log(fnDF(N));
