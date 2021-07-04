function solution(money, cost) {
  let answer = -Infinity;
  let idx_diff = 0;
  let value_diff = 0;

  const prefix_sum = Array(cost.length + 1).fill(0);
  // 구간의 합을 구하는 prefix_sum 배열을 만듭니다.
  for (let i = 1; i <= cost.length; i++) {
    prefix_sum[i] = cost[i - 1] + prefix_sum[i - 1];
  }

  for (let end = cost.length - 1; end >= 0; end--) {
    for (let start = end - 1; start >= 0; start--) {
      // 구간의 값과 인덱스의 차이를 계산하고
      value_diff = prefix_sum[end] - prefix_sum[start];
      idx_diff = end - start;
      // 구간의 차이 값이 가용 가능한 돈인 Money보다 작을 때
      if (value_diff < money) {
        // 기존의 길이보다 길면 값을 추가 해줍니다.
        if (answer < idx_diff) answer = idx_diff;
      }
    }
  }
  // 만약 가용 가능한 돈으로 해결이 불가능하여 초기 값이 남아있으면
  // 0을 출력합니다.
  if (answer === -Infinity) answer = 0;

  return answer;
}
