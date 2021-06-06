function checkCount(i, j, max) {
  let verCount = 0;
  let horCount = 0;

  for (let k = i; k < 5; k++) {
    if (candies[i][j] === candies[k][j]) {
      verCount++;
    }
  }

  for (let l = j; l < 5; l++) {
    if (candies[i][j] === candies[i][l]) {
      horCount++;
    }
  }

  if (max < verCount) {
    max = verCount;
  }

  if (max < horCount) {
    max = horCount;
  }

  return max;
}

function solution(candies) {
  let max = 0;

  for (let i = 0; i < 5; i++) {
    candies[i] = candies[i].split("");

    for (let j = 0; j < 5; j++) {
      if (j + 1 < 5) {
        [candies[i][j], candies[i][j + 1]] = [candies[i][j + 1], candies[i][j]];
        max = checkCount(i, j, max);
        [candies[i][j], candies[i][j + 1]] = [candies[i][j + 1], candies[i][j]];
      }

      if (i + 1 < 5) {
        [candies[i][j], candies[i + 1][j]] = [candies[i + 1][j], candies[i][j]];
        max = checkCount(i, j, max);
        [candies[i][j], candies[i + 1][j]] = [candies[i + 1][j], candies[i][j]];
      }
    }
  }

  return max;
}

const candies = ["YCPZY", "CYZZP", "CCPPP", "YCYZC", "CPPZZ"];
console.log(solution(candies));
