function dfs(x, count) {
  if (x === b) {
    return console.log(count);
  } else {
    if (x * 2 <= b) {
      dfs(x * 2, count + 1);
    }
    if (x * 10 + 1 <= b) {
      dfs(x * 10 + 1, count + 1);
    }
  }
}

let count = 1;
const [a, b] = [2, 162];
dfs(a, count);

// function solution() {
//   const queue = [a, 1];

//   while (queue.length) {
//     let n = queue.shift();
//     let count = queue.shift();

//     if (n === b) {
//       return console.log(count);
//     } else {
//       if (n * 2 <= b) {
//         queue.push(n * 2, count + 1);
//       }
//       if (n * 10 + 1 <= b) {
//         queue.push(n * 10 + 1, count + 1);
//       }
//     }
//   }

//   console.log(-1);
// }
