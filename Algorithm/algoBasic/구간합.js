function solution(data) {
  let sum_A = Array(data.length + 1).fill(0);

  for (let i = 1; i <= data.length; i++) {
    sum_A[i] = sum_A[i - 1] + data[i - 1];
  }

  console.log(sum_A);
}

const data = [10, 20, 30, 40, 50];
solution(data);
