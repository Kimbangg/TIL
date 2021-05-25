function solution(scoville, K) {
  let answer = 0;
  scoville.sort((a, b) => a - b);

  for (let i = 0; i < scoville.length; i++) {
    if (scoville[i] < K) {
      let tmpValue = scoville[i] + scoville[i + 1] * 2;
      scoville.splice(i, 2);
      scoville.unshift(tmpValue);
      answer += 1;
    }
  }
  return answer;
}

const scoville = [1, 2, 3, 9, 10, 12];
let K = 7;
console.log(solution(scoville, K));

// 문제를 제대로 이해했는가? [0]

// 어떻게 문제를 풀 수 있는가? [ worst case ]

// O(n) 이하로 내려가려면 어떻게 해야하는가?
