function solve() {
  const stack = [];

  while (queue.length) {
    if (queue.some((each) => each < queue[0])) {
      stack.unshift(queue.shift());
      continue;
    }

    queue.shift();
  }

  if (queue.length === 0 && stack === stack.sort()) {
    console.log("Nice");
  } else {
    console.log("Sad");
  }
}

const queue = [5, 4, 1, 3, 2];
solve();
