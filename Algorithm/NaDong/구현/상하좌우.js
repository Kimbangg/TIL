function solution(commands) {
  const location = [1, 1];

  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];
    switch (command) {
      case "R":
        if (location[1] === 5) {
          continue;
        }
        location[1] += 1;
        break;
      case "L":
        if (location[1] === 0) {
          continue;
        }
        location[1] -= 1;
        break;
      case "U":
        if (location[0] === 1) {
          continue;
        }
        location[0] -= 1;
        break;
      case "D":
        if (location[0] === 5) {
          continue;
        }
        location[0] += 1;
        break;
    }
  }
  return location;
}

const commands = ["R", "R", "R", "U", "D", "D"];
console.log(solution(commands));
