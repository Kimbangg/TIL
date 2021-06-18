function getPermutation(cnt, output, permu_arr, visited) {
  if (cnt === n) {
    permu_arr.push(output.join(""));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] === 1) continue;
    visited[i] = 1;
    output.push(i);
    getPermutation(cnt + 1, output, permu_arr, visited);
    output.pop();
    visited[i] = 0;
  }
}

function solution(n, map) {
  let answer = Infinity;
  const output = [];
  const permu_arr = [];
  const visited = Array(n + 1).fill(0);

  getPermutation(0, output, permu_arr, visited);

  for (let i = 0; i < permu_arr.length - 1; i++) {
    let sum = 0;
    let cur_map = permu_arr[i].split("").map((e) => +e);

    for (let j = 1; j < n; j++) {
      if (
        map[cur_map[j - 1]][cur_map[j]] === 0 ||
        map[cur_map[j]][cur_map[j - 1]] === 0
      ) {
        answer = Infinity;
        break;
      }

      sum += map[cur_map[j - 1]][cur_map[j]];
    }

    sum += map[cur_map[n - 1]][cur_map[0]];
    answer > sum ? (answer = sum) : answer;
  }

  return answer;
}

const n = 4;

const map = [
  [0, 10, 15, 20],
  [5, 0, 9, 10],
  [6, 13, 0, 12],
  [8, 8, 9, 0],
];

console.log(solution(n, map));
