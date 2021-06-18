function solution() {
  input_data = input_data.split("");

  let row = parseInt(input_data[1]);
  let col = parseInt(input_data[0].charCodeAt() - "a".charCodeAt());

  const steps = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
  ];

  let result = 0;

  for (let i = 0; i < steps.length; i++) {
    let next_row = row + steps[i][0];
    let next_col = col + steps[i][1];

    if (next_row >= 1 && next_row <= 8 && next_col >= 1 && next_col <= 8) {
      result += 1;
    }
  }
  return result;
}

let input_data = "a1";
console.log(solution());
