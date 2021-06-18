function solve() {
  for (let i = 0; i < n; i++) {
    const current = nums[i];

    for (let j = stack.length - 1; j >= 0; j--) {
      const tmp = nums[stack[j]];

      if (tmp < current) {
        result[stack.pop()] = current;
      } else {
        break;
      }
    }
    stack.push(i);
  }
  console.log(result);
}

const n = 4;
const stack = [];
const nums = [3, 5, 2, 7];
const result = [-1, -1, -1, -1];
solve();

// 최악의 경우를 만들고, 리팩토링을 하는게 중요
// 테스트 케이스를 만들면서 보이지 않는 예외를 처리 할 것
