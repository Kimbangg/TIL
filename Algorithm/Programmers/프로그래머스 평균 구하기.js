function solution(arr) {
  let answer = arr.reduce((acc, value) => acc + value);
  let length = arr.length;

  return answer / length;
}

let arr = [1, 2, 3, 4];
console.log(solution(arr));
