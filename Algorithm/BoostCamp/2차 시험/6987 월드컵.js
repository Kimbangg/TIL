function solution() {
  let len = result.length - 1;

  // 승리의 수를 기준으로 내림차순
  result.sort((a, b) => {
    return b[0] - a[0];
  });

  // [0,0,0] 배열을 팀의 수만큼 만들어줌 = 초기화
  const board = Array.from(Array(6), () => Array(3).fill(0));

  for (let i = 0; i < result.length; i++) {
    // 구조분해할당
    const [win, draw, defeat] = result[i];
    // 승리와 무승부는 그 자리에 넣어주고
    board[i][0] = win;
    board[i][1] = draw;

    // 패배의 수는 승리의 값만큼 다른 팀에 적용 시켜준다.
    for (let j = len; j >= len - win + 1; j--) {
      board[j][2] += 1;
    }
    console.log(board);
  }
  // 같으면 1, 다르면 0 출력
  for (let i = 0; i < result.length; i++) {
    if (board[i].join("") !== result[i].join("")) return 0;
  }

  return 1;
}

const result = [
  [4, 1, 0],
  [3, 0, 2],
  [4, 1, 0],
  [1, 1, 3],
  [0, 0, 5],
  [1, 1, 3],
];

console.log(solution());
