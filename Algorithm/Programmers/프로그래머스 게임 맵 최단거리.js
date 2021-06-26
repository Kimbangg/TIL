function solution(maps) {
  const n = maps.length - 1;
  const m = maps[0].length - 1;

  let answer = -1;

  function bfs(x, y, cnt) {
    const queue = [];
    queue.push(x, y, cnt);
    maps[x][y] = 0;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    while (queue.length) {
      x = queue.shift();
      y = queue.shift();
      cnt = queue.shift();

      if (x === n && y === m) {
        answer = cnt;
        return;
      }

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx < 0 || ny < 0 || nx > n || ny > m) continue;

        if (maps[nx][ny] === 1) {
          maps[nx][ny] = 0;
          queue.push(nx, ny, cnt + 1);
        }
      }
    }
    return;
  }

  bfs(0, 0, 1);
  return answer;
}

// function isValidRange(x, y, maps) {
//   if (x < 0 || y < 0 || x >= maps[0].length || y >= maps.length) {
//     return false;
//   }

//   return true;
// }

// function solution(maps) {
//   const dx = [-1, 1, 0, 0];
//   const dy = [0, 0, -1, 1];

//   let answer = -1;
//   const queue = [0, 0, 1];
//   maps[0][0] = 1;

//   while (queue.length) {
//     let x = queue.shift();
//     let y = queue.shift();
//     let count = queue.shift();

//     if (x === maps[0].length - 1 && y === maps.length - 1) {
//       answer = count;
//       break;
//     }

//     for (let i = 0; i < 4; i++) {
//       const nx = x + dx[i];
//       const ny = y + dy[i];

//       if (!isValidRange(nx, ny, maps)) {
//         continue;
//       }

//       if (maps[nx][ny] === 1) {
//         maps[nx][ny] = 2;
//         queue.push(nx, ny, count + 1);
//       }
//     }
//   }

//   return answer;
// }

// function solution(maps) {
//   let answer = 0;
//   const visited = Array.from(Array(5), () => Array(5).fill(0));
//   bfs(0, 0);

//   function bfs(x, y) {
//     const dx = [-1, 1, 0, 0];
//     const dy = [0, 0, -1, 1];

//     const queue = [x, y];
//     visited[x][y] = 1;

//     while (queue.length) {
//       x = queue.shift();
//       y = queue.shift();

//       for (let i = 0; i < 4; i++) {
//         const nx = x + dx[i];
//         const ny = y + dy[i];

//         if (nx < 0 || ny < 0 || nx >= 5 || ny >= 5) {
//           continue;
//         }

//         if (visited[nx][ny] === 0 && maps[nx][ny] === 1) {
//           maps[nx][ny] = maps[x][y] + 1;
//           queue.push(nx, ny);
//         }
//       }
//     }
//   }

//   answer = maps[4][4];

//   answer === 1 ? (answer = -1) : answer;

//   return answer;
// }
