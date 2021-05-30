function swapNumbers(row, col) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][col] !== 0) {
      matrix[i][col] = 0;
    }
  }

  for (let j = 0; j < matrix[row].length; j++) {
    if (matrix[row][j] !== 0) {
      matrix[row][j] = 0;
    }
  }

  return matrix;
}

function solution(matrix) {
  const indexArr = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        indexArr.push([i, j]);
      }
    }
  }

  for (let i = 0; i < indexArr.length; i++) {
    const [row, col] = indexArr[i];
    swapNumbers(row, col);
  }

  return matrix;
}

let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

console.log(solution(matrix));
