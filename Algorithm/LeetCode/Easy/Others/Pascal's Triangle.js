function solution(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  const result = [];

  for (let row = 1; row <= numRows; row++) {
    let arr = [];
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        arr.push(1);
      } else {
        arr.push(result[row - 2][col - 1] + result[row - 2][col]);
      }
    }
    result.push(arr);
  }

  return result;
}

let numRows = 5;
console.log(solution(numRows));
// tmpArr =     [1]
// tmpArr =    [1, 1]
// tmpArr =   [1, 2, 1]
// tmpArr =  [1, 3, 3, 1]
// tmpArr = [1, 4, 6, 4, 1]

//tmpArr[1][0] = answer[i-1][i-1]
//tmpArr[1][1] = answer[i-1][i-1]

// tmpArr[2][0] = answer[1][-1] + answer[1][0]
// tmpArr[2][1] = anwer[1][0] + answer[1][1]
// tmpArr[2][2] = answer[1][1] + answer[1][2]
