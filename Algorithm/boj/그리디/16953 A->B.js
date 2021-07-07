let count = 0;
const [A, B] = input[0].split(" ").map((e) => +e);
let result = -1;
const queue = [A, 1];

while (queue.length) {
  let x = queue.shift();
  let cnt = queue.shift();

  if (x === B) {
    break;
  }

  if (x * 2 <= B) {
    queue.push(x * 2, cnt + 1);
  }
  if (x * 10 + 1 <= B) {
    queue.push(x * 10 + 1, cnt + 1);
  }
}

// 연산은 2가지만 가능하다
// 2를 곱하거나, 1을 뒤에 붙이거나
