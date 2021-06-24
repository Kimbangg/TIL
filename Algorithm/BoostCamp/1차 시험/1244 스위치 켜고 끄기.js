function solution(switch_state, sex_idx) {
  for (let i = 0; i < test_case; i++) {
    const [sex, idx] = sex_idx[i];

    // 남자의 경우
    if (sex === 1) {
      for (let i = idx - 1; i < switch_state.length; i += idx) {
        switch_state[i] = 1 - switch_state[i];
      }
    }

    // 여자의 경우
    else {
      let left = idx - 2;
      let right = idx;

      while (switch_state[left] === switch_state[right]) {
        left -= 1;
        right += 1;
      }

      for (let start = left + 1; start < right; start++) {
        switch_state[start] = 1 - switch_state[start];
      }
    }
  }

  console.log(switch_state);
}

const switch_state = [0, 1, 0, 1, 0, 0, 0, 1];

const test_case = 2;

const sex_idx = [
  [1, 3],
  [2, 3],
];

solution(switch_state, sex_idx);
