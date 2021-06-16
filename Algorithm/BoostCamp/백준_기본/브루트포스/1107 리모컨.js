function checkBtnCount(num) {
  if (num === 0) {
    if (brokenNumbers[0]) {
      return 0;
    } else {
      return 1;
    }
  }

  let len = 0;
  while (num > 0) {
    if (brokenNumbers[num % 10]) {
      return 0;
    }

    num = Math.floor(num / 10);
    len++;
  }

  return len;
}

function solve() {
  // +, - 만으로 이동
  let minBtnCnt = Math.abs(N - 100);

  // 숫자 + (+,-)로 이동
  for (let i = 0; i <= 100000; i++) {
    // 몇 개의 숫자를 누를 수 있는지 ( 고장난 버튼이 있으면 중단 )
    let pressedNum = checkBtnCount(i);

    if (pressedNum > 0) {
      // 목표 값 - 현재 값 = (+,-)를 눌러야 하는 개수
      let signBtnCnt = Math.abs(N - i);
      minBtnCnt = Math.min(minBtnCnt, pressedNum + signBtnCnt);
    }
  }
  return minBtnCnt;
}

const N = 5457;
const broken = [6, 7, 8];
const brokenNumbers = new Array(10).fill(false);

for (let i = 0; i < broken.length; i++) {
  brokenNumbers[broken[i]] = true;
}

console.log(solve());
