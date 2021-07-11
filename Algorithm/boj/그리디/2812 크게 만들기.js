function solution() {
  let answer = "";
  const stack = [];

  for (let i = 0; i < n; i++) {
    let cur = num[i];

    while (k > 0 && stack[stack.length - 1] < cur) {
      stack.pop();
      k -= 1;
    }

    stack.push(cur);
  }
  stack.splice(stack.length - k, k);
  console.log(stack.join(""));
}

let [n, k] = [4, 2];
const num = "1924";
solution();
