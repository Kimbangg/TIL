function solution() {
  onTable = onTable.split("");
  let answer = 0;

  for (let i = 0; i < table_length; i++) {
    if (onTable[i] === "P") {
      // 탐색 범위를 위한 변수
      const start = i - 1 - diff;
      const end = i - 1 + diff;

      // [1] 왼쪽부터 시작하는 이유는 가장 맨 앞 쪽에서 부터 탐색 하기 위함.
      for (let j = start; j <= end; j++) {
        if (onTable[j] === "H") {
          // 햄버거 먹은 인원 증가.
          answer += 1;
          //[3] 먹었다는 처리를 위해 D(Done)로 문자를 바꿈
          onTable[j] = "D";
          // [2]햄버거를 만난 지점에서 탐색을 끝내야 여러 개의 햄버거를
          // 1명이 먹는 상황을 막음.
          break;
        }
      }
    }
  }
  console.log(answer);
}

const [table_length, diff] = [20, 2];

let onTable = "HHPHPPHHPPHPPPHPHPHP";

solution();
