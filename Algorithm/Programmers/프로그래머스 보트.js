function solution(d, m) {
  // 필요한 보트의 개수
  let answer = 0;

  // 적재량
  let loaded_cnt = 1;

  for (let i = 0; i < d.length; i++) {
    // 루프가 다 돌기 전에, 짐을 모두 옮겼을 때
    if (m <= 0) {
      return answer;
    }
    // 짐을 싣을 수 있으면, 옮기고 2배 증가.
    if (d[i] >= loaded_cnt) {
      m -= loaded_cnt;
      loaded_cnt *= 2;
    } else {
      // 짐을 옮길 수 없으면 1로 초기화
      loaded_cnt = 1;
    }
    // 옮길 수 있던, 없던 배는 사용 됬기에 1을 증가
    answer += 1;
  }
  // 과정이 모두 끝났을 때, 짐이 남아 있으면 옮길 수 없다는 것.
  if (m >= 1) return -1;
  // 남은 짐이 없으면 필요한 보트의 개수를 출력.
  else return answer;
}
