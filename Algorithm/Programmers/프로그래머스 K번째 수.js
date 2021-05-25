function solution(array, commands) {
  return commands.map((command) => {
    const [start, end, target] = end;
    const newArray = array
      .filter((value, index) => index >= start - 1 && index <= end - 1)
      .sort((a, b) => a - b);

    return newArray[target - 1];
  });
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));
