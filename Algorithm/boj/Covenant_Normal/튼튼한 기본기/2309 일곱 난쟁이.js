function solution(talls) {
  talls = talls.sort((a, b) => a - b);
  let total = talls.reduce((acc, value) => acc + value);
  const not = [];

  for (let i = 0; i < talls.length; i++) {
    for (let j = i + 1; j < talls.length; j++) {
      if (total - (total[i] + total[j]) === 100) {
        not.push(total[i]);
        not.push(total[j]);
      }
    }
  }

  return talls;
}

let talls = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(talls));
