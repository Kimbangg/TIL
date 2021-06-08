function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const tmpArr = [];
    for (let j = 0; j < arr1[i].length; j++) {
      let sum = arr1[i][j] + arr2[i][j];
      tmpArr.push(sum);
    }
    answer.push(tmpArr);
  }
  return answer;
}

const arr1 = [
  [1, 2],
  [2, 3],
];

const arr2 = [
  [3, 4],
  [5, 6],
];

solution(arr1, arr2);
