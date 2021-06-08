function solution(N, number) {
  const s = [new Set()];

  for (let i = 1; i <= 8; i++) {
    s.push(new Set([new Array(i).fill(N).join("") * 1]));
    for (let j = 1; j <= i; j++) {
      for (const x1 of [...s[j]]) {
        for (const x2 of [...s[i - j]]) {
          s[i].add(x1 + x2);
          s[i].add(x1 - x2);
          s[i].add(x1 * x2);

          if (x2) {
            s[i].add(x1 / x2 - ((x1 / x2) % 1));
          }
        }
      }
      if (s[i].has(number)) {
        return i;
      }
    }
  }
  return -1;
}

let [N, number] = [5, 12];
console.log(solution(N, number));
