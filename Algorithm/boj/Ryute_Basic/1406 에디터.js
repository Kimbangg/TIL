function solution() {
  const leftStack = s.split("");
  const rightStack = [];

  for (let i = 0; i < commands.length; i++) {
    const [command, value] = commands[i].split(" ");

    switch (command) {
      case "L":
        if (leftStack.length != 0) {
          rightStack.push(leftStack.pop());
        }
        break;

      case "D":
        if (rightStack.length != 0) {
          leftStack.push(rightStack.pop());
        }
        break;

      case "B":
        if (leftStack.length != 0) {
          leftStack.pop();
        }
        break;

      case "P":
        leftStack.push(value);
        break;
    }
  }
  let result = leftStack.concat(rightStack.reverse()).join("");
  console.log(result);
}

let s = "abcd";

const commands = ["P x", "L", "P y"];
solution();
