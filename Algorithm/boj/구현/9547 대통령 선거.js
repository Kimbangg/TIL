function solution(preference) {
  let first = {};
  const second = {};
  const majority = Math.ceil(v / 2);

  for (let i = 0; i < v; i++) {
    first[preference[i][0]] = (first[preference[i][0]] || 0) + 1;
  }

  for (const key in first) {
    if (first[key] > majority) return console.log(key, 1);
  }

  const first_arr = [];

  for (const key in first) {
    first_arr.push([key, first[key]]);
  }

  first_arr.sort((a, b) => a[1] - b[1]);
  const maxIdx = first_arr.length - 1;
  const secondIdx = first_arr.length - 2;

  for (let j = 0; j < v; j++) {
    if (
      preference[j][1] === Number(first_arr[maxIdx][0]) ||
      preference[j][1] === Number(first_arr[secondIdx][0])
    ) {
      second[preference[j][1]] = (second[preference[j][1]] || 0) + 1;
    }
  }

  //  > second[first_arr[first_arr.length - 2][0]]] ?
}

const [c, v] = [3, 5];

const preference = [
  [1, 2, 3],
  [1, 2, 3],
  [2, 1, 3],
  [2, 3, 1],
  [3, 2, 1],
];

solution(preference);
