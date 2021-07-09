function solution(duck) {
  let cnt = 0;
  let idx = 0;
  let first = true;
  const word = ["q", "u", "a", "c", "k"];
  const visited = Array(duck.length).fill(false);

  if (duck.length % 5 !== 0) return -1;

  for (let i = 0; i < duck.length; i++) {
    if (duck[i] === "q" && !visited[i]) {
      first = true;

      for (let j = i; j < duck.length; j++) {
        if (word[idx] === duck[j] && !visited[j]) {
          visited[j] = true;

          if (duck[j] === "k") {
            if (first) {
              cnt += 1;
              first = false;
            }
            idx = 0;
            continue;
          }

          idx += 1;
        }
      }
      console.log(cnt);
      console.log(visited);
    }
  }
  console.log(cnt);
}

const duck = "quqaquuacakcqckkuaquckqauckack";
solution(duck);

// function solution() {
//   let cnt = 0;
//   let idx = 0;
//   const word = ["q", "u", "a", "c", "k"];

//   for (let i = 0; i < duck.length; i++) {
//     if (duck[i] === word[idx]) {
//       idx += 1;
//     }

//     if (idx > 4) {
//       cnt += 1;
//       idx = 0;
//     }
//   }
//   console.log(cnt);
// }
