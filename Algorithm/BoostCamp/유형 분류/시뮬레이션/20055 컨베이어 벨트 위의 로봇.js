function solve() {
  while (true) {
    let zero = 0;
    count += 1;

    // 1. 벨트가 각 칸위에 있는 로봇과 함께 한칸 회전하다.
    belt.unshift(belt.pop());
    robot.unshift(robot.pop());

    // 2. 가장 먼저 벨트에 올라간 로봇부터 이동
    // 옆으로 이동시키면, 그걸 또 이동 시키는 에러 발생.

    let robot_count = robot.forEach((each) => each === 1);

    if (robot_count) {
      for (let i = n - 2; i >= 0; i--) {
        if (robot[i] === 1 && robot[i + 1] === 0 && belt[i + 1] >= 1) {
          robot[i + 1] = 1;
          robot[i] = 0;
          belt[i + 1] -= 1;
        }
      }
    }
    robot[robot.length - 1] = 0;

    // 3. 올리는 칸의 내구도가 0이 아니면 로봇을 올린다.
    if (belt[0] !== 0) {
      belt[0] -= 1;
      robot[0] = 1;
    }

    for (let i = 0; i < belt.length; i++) {
      if (belt[i] === 0) {
        zero += 1;
      }
    }

    // 내구도가 0인 칸이 k개 라면, 종료
    if (zero === k) {
      console.log(count);
      break;
    }
  }
}

let count = 0;

const [n, k] = [4, 5];
let belt = [10, 1, 10, 6, 3, 4, 8, 2];
let robot = Array(n).fill(0);
solve();

// 미는 방법을 벨트의 끝을 팝해서, 앞으로 갖다 붙여주면 된다.
