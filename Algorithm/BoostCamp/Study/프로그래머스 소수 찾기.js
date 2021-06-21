function setDuplicate(arr) {
  arr = arr.filter((item, index) => arr.indexOf(item) === index);

  return arr;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function getPermutation(idx, visited, permu_arr, numbers, output) {
  if (idx <= numbers.length) {
    permu_arr.push(Number(output.join("")));
  }

  for (let i = 0; i < numbers.length; i++) {
    if (visited[i]) continue;

    visited[i] = 1;
    output.push(numbers[i]);
    getPermutation(idx + 1, visited, permu_arr, numbers, output);
    output.pop();
    visited[i] = 0;
  }
}

function solution(numbers) {
  numbers = numbers.split("").map((e) => +e);

  let answer = 0;
  let permu_arr = [];
  const output = [];
  const visited = Array(numbers.length).fill(0);

  getPermutation(0, visited, permu_arr, numbers, output);

  permu_arr = setDuplicate(permu_arr);

  for (let i = 0; i < permu_arr.length; i++) {
    if (isPrime(permu_arr[i])) answer += 1;
  }

  return answer;
}
