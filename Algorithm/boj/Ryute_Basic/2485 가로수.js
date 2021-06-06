function getGCD(a, b) {
  let tmp;

  while (b !== 0) {
    tmp = a % b;
    a = b;
    b = tmp;
  }

  return a;
}

function solution() {
  let GCD;
  let answer = 0;
  const distance = [];

  for (let i = trees.length - 1; i > 0; i--) {
    let gap = trees[i] - trees[i - 1];
    distance.unshift(gap);
  }

  for (let i = 0; i < distance.length - 1; i++) {
    GCD = getGCD(distance[i + 1], distance[i]);
  }

  for (let i = 0; i < distance.length; i++) {
    answer += distance[i] / GCD - 1;
  }

  return answer;
}

let trees = [1, 3, 7, 13];
console.log(solution(trees));
