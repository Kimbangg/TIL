function solution(citations) {
  citations = citations.sort((a, b) => b - a);

  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }

  return i;
}

let citations = [20, 19, 18, 15, 14];
console.log(solution(citations));
