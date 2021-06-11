function solve() {
  let jump = 0;
  const answer = [];
  const tmpArr = balloon.slice();

  while (balloon.length) {
    let tmpValue = balloon[jump];

    answer.push(tmpArr.indexOf(balloon[jump]) + 1);

    balloon.splice(jump, 1);

    // 양수 음수에 따른 점프(이동 위치) 계산
    tmpValue < 0 ? (jump += tmpValue) : (jump += tmpValue - 1);

    // boundary를 벗어 났을 때, 처리
    if (jump >= balloon.length) jump %= balloon.length;
    if (jump < 0) jump = balloon.length + jump;
  }

  console.log(answer);
}

let N = 5;
let balloon = [3, 2, 1, -3, -1];
solve();
