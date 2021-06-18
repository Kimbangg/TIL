function turnLeft() {
  direction -= 1;
  if (direction === -1) {
    direction = 3;
  }
  return direction;
}

function solution() {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let count = 1;
  let turn_time = 0;

  while (true) {
    turnLeft();

    let nx = x + dx[direction];
    let ny = y + dy[direction];

    if (prev[nx][ny] === 0 && map[nx][ny] === 0) {
      prev[nx][ny] = 1;
      x = nx;
      y = ny;
      count += 1;
      turn_time = 0;
    } else {
      turn_time += 1;
    }

    if (turn_time === 4) {
      nx = x - dx[direction];
      ny = y - dy[direction];

      if (map[nx][ny] === 0) {
        x = nx;
        y = ny;
      } else {
        break;
      }
      turn_time = 0;
    }
  }

  console.log(count);
}

let [N, M] = [4, 4];
let [x, y, direction] = [1, 1, 0];

const prev = [
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const map = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];

solution();
