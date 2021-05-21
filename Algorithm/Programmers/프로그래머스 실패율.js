// filter가 없어서 그런지 속도가 매우 빠름.
function solution(N, stages) {
  const answer = [];
  const map = new Array(N + 1).fill(0);
  let length = stages.length;

  stages.forEach((stage, index) => {
    map[stage] = (map[stage] || 0) + 1;
  });

  for (let i = 1; i <= N; i++) {
    answer.push([i, map[i] / length]);
    length -= map[i];
  }

  answer.sort((a, b) => b[1] - a[1]);

  return answer.map((each) => each[0]);
}

// 정리 코드 => 시간 복잡도 느림
function solution(N, stages) {
  const answer = [];
  let length = stages.length;

  for (let i = 1; i <= N; i++) {
    let loser = stages.filter((stage) => stage === i).length;
    answer.push([i, loser / length]);
    length -= loser;
  }

  answer.sort((a, b) => b[1] - a[1]);

  return answer.map((each) => each[0]);
}

let N = 4;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N, stages));
