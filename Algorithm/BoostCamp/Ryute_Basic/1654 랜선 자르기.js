function solve() {
  lines.sort((a, b) => a - b);

  let start = 1;
  let end = lines[lines.length - 1];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let count = 0;

    for (let i = 0; i < lines.length; i++) {
      if (mid > lines[i]) {
        continue;
      }
      count += Math.floor(lines[i] / mid);
    }

    if (count >= target) {
      start = mid + 1;
    } else if (count < target) {
      end = mid - 1;
    }
  }
  return end;
}

const [N, target] = [4, 11];
const lines = [802, 743, 457, 539];
console.log(solve());
