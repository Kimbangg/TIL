function solution(n, random) {
  const answer = [n, random];

  while (random >= 0) {
    let tmp = n - random;
    n = random;
    random = tmp;

    if (tmp < 0) break;

    answer.push(tmp);
  }

  console.log(answer);
}

let n = 500;
let random = Math.floor(Math.random() * n);
solution(n, random);
