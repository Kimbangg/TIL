function solution() {
  let max = 0;
  let standard = "";
  const hashMap = {};
  const smaller = [];
  const bigger = [];
  const flat_map = map.flat();

  for (let i = 0; i < flat_map.length; i++) {
    hashMap[flat_map[i]] = (hashMap[flat_map[i]] || 0) + 1;
  }

  for (const key in hashMap) {
    if (hashMap[key] > max) {
      standard = Number(key);
    }
  }

  for (let i = 0; i < flat_map.length; i++) {
    if (standard > flat_map[i]) smaller.push(standard - flat_map[i]);
    else if (standard < flat_map[i]) bigger.push(flat_map[i] - standard);
  }

  const small_sum = smaller.reduce((acc, value) => acc + value);

  if (small_sum > b) {
  }
}

const [n, m, b] = [3, 4, 2];

const map = [
  [64, 64, 64, 63],
  [64, 64, 64, 63],
  [64, 64, 64, 63],
];

solution();
