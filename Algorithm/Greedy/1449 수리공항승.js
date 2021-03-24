function solution(N, L, line) {
  let fix = 0;
  let cnt = 0;
  // 파이프 길이만큼 순회를 하면서
  for (let i = 0; i < N; i++) {
    // fix(가용범위 내에 다음 파이프가 없으면 )
    if (fix < line[i]) {
      // 카운트를 증가 시키고
      cnt += 1;
      // 가용 범위를 조정한다.
      fix = line[i] + L - 1;
    }
  }
  console.log(cnt);
}

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

// 파이프 개수 및 테이프의 길이를 입력 받는다.
const [N, L] = input[0].split(" ").map((e) => +e);

// 파이프의 위치를 입력 받고, 오름차순으로 정렬한다.
const pipe = input[1]
  .split(" ")
  .map((e) => +e)
  .sort((a, b) => a - b);

solution(N, L, pipe);
