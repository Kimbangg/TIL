// 0과의 최소 차이를 찾는 함수
function searchMinDiff(answer) {
  let min = Infinity;

  answer.forEach(function (each, i) {
    let diff =
      answer[i][2] - 0 < 0 ? Math.abs(answer[i][2] - 0) : answer[i][2] - 0;

    if (min > diff) {
      min = diff;
    }
  });

  return min;
}

function solve() {
  liquid.sort((a, b) => a - b);

  let left = 0;
  let right = liquid.length - 1;

  const answer = [];

  // Two-Pointer Search
  while (left < right) {
    let sum = liquid[left] + liquid[right];
    answer.push([liquid[left], liquid[right], sum]);

    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  // 최소 차이를 위한 변수
  let min = searchMinDiff(answer);

  // 최소 차이를 가진 용액의 합을 모두 출력
  for (let i = 0; i < answer.length; i++) {
    if (answer[i][2] === min || Math.abs(answer[i][2]) === min) {
      console.log(answer[i][0] + " " + answer[i][1]);
    }
  }
}

// local input
let liquid = [-2, 4, -99, -1, 98];
solve();

// 총 3개

// 1. 문제를 이해했는지? [] => 다시 읽는 경우가 너무 많음
// 2. 최악의 경우 => 생각나면 바로푼다
// 3. O(n) ? => log(n)
