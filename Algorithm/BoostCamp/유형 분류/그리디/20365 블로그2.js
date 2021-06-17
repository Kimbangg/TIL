function strokeWithRed() {
  let count = 0;
  const redString = Array(n).fill("R");

  if (s[0] === "B" && s[n - 1] === "R") {
    redString[0] = "B";
    count += 1;
  }

  if (s[n - 1] === "B" && s[0] === "R") {
    redString[n - 1] = "B";
    count += 1;
  }

  for (let i = 0; i < n; i++) {
    if (s[i] !== redString[i]) {
      count += 1;
    }
  }
  return count;
}

function strokeWithBlue() {
  let count = 0;
  const redString = Array(n).fill("B");

  if (s[0] === "R" && s[n - 1] === "B") {
    redString[0] = "B";
    count += 1;
  }

  if (s[n - 1] === "R" && s[0] === "B") {
    redString[n - 1] = "B";
    count += 1;
  }

  for (let i = 0; i < n; i++) {
    if (s[i] !== redString[i]) {
      count += 1;
    }
  }
  return count;
}

function strokeWiteMixed() {
  let count = 1;
  let checked = s[0];

  for (let i = 0; i < n; i++) {
    if (s[i] !== checked) {
      checked = s[i];
      count++;
    }
  }
  return count;
}

function solve() {
  let answer = Math.min(strokeWithRed(), strokeWithBlue(), strokeWiteMixed());

  console.log(answer);
}

const n = 8;
let s = "BBR BR BBR";
solve();

// 문제를 제대로 이해했는가? [O]

// How to Solve ?
// B B R B R B B B R

// 전체를 다 파란색으로 변경 [ 1 ] // 양 쪽 끝이 한 색과 다르면
// 전체를 다 빨간색으로 변경 [ 2 ] // 양 쪽 끝이 한 색과 다르면
// 어디 이전까지 변경 [ 3 ]

// 무엇을 물어보는걸까? => 시뮬레이션 이라고 하기엔 뭔가 복잡함을 요구
// 최소한의 색으로 칠할 수 있는

// 한번의 탐색으로 해야하나?
