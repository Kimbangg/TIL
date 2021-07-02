function solution() {
  const start = 1;
  const end = n;

  let count = 1;

  const range_arr = [];

  for (let i = 0; i < location.length; i++) {
    let tmpStart = i + 1 - location[i];
    let tmpEnd = i + 1 + location[i];

    tmpStart < start ? (tmpStart = start) : tmpStart;
    tmpEnd > end ? (tmpEnd = end) : tmpEnd;

    range_arr.push([tmpStart, tmpEnd]);
  }

  range_arr.sort((a, b) => a[0] - b[0]);
  let tmpStart = range_arr[0][0];
  let tmpEnd = range_arr[0][1];

  for (let i = 1; i < range_arr.length; i++) {
    const [curStart, curEnd] = range_arr[i];

    if (tmpStart === curStart) {
      if (tmpEnd < curEnd) {
        tmpEnd = curEnd;
      }
    } else if (tmpStart + 1 === curStart) {
      tmpEnd = curEnd;
      count += 1;
    }

    if (tmpEnd - tmpStart === n - 1) {
      return count;
    }
  }
}

const n = 4;
const location = [2, 1, 1, 0];
console.log(solution());

// 문제의 의도가 뭘까?

// 최소한으로 물을 뿌릴 수 있게 만들어 주려면 몇 개의 분수가 필요한지?
