function solution() {
  const stack = [];
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    const current = string[i];

    if (stack[stack.length - 1] === current) {
      stack.pop();
    }
    stack.push(current);
  }

  const set = new Set(stack);

  if (set.size === stack.length) {
    count += 1;
  }

  console.log(count);
}

const string = "abaab";
solution();
