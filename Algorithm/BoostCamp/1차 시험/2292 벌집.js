function solution() {
  // 예외 조건으로 불 필요한 연산 막고
  if (target === 1) {
    return 1;
  }

  // 규칙을 어떻게 구현 할 것 인지?
  let layer = 1;
  let jump = 6;
  let layer_max_count = 1;

  // 예외로 발생 할 수 있는 문제를 체크.
  while (layer_max_count < target) {
    layer_max_count += jump;
    layer += 1;
    jump += 6;
  }

  console.log(layer);
}

const target = 19;
solution(target);
