// 중복을 제거 해주는 함수
function setDuplicate(arr) {
  arr = arr.filter((item, index) => arr.indexOf(item) === index);
  return arr;
}

function solve() {
  let end = 0;
  let max = -Infinity;
  let lane_length = lane.length - 1;
  const sequence = [];

  // 투포인터
  for (let i = 0; i < lane_length; i++) {
    // K개까지 연속된 초밥을 Sequence 함수에 담는다.
    while (sequence.length <= k) {
      sequence.push(lane[end]);
      end === lane_length ? (end = (end % lane_length) + 1) : (end += 1);
    }

    // 중복된 초밥을 제거
    const removeDup = setDuplicate(sequence);
    let size = removeDup.length;

    // 만약에 보너스 초밥이, 선택된 초밥 안에 없으면
    if (removeDup.indexOf(c) === -1) {
      size += 1;
    }

    // 이전보다 더 큰 값이라면, 최대 초밥 개수 초기화
    if (max < size) {
      max = size;
    }

    // start 포인터 제거 (= 한 칸 뒤로 이동 )
    sequence.shift();
  }

  console.log(max);
}

let [n, d, k, c] = [8, 30, 4, 30];
const lane = [7, 9, 7, 30, 2, 7, 9, 25];
solve();
