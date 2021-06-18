function solution(commands, nums) {
  commands = commands.split("");

  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];

    switch (command) {
      case "R":
        nums.reverse();
        break;
      case "D":
        if (nums.length <= 1) {
          console.log("Error");
          return;
        }
        nums.shift();
        break;
    }
  }
  console.log(nums);
}

let commands = "RDD";
let nums = [1, 2, 3, 4];
solution(commands, nums);
