function solution() {
  let max = -Infinity;
  const prefix_sum = Array(visit.length + 1).fill(0);

  for (let i = 1; i <= visit.length; i++) {
    prefix_sum[i] = visit[i - 1] + prefix_sum[i - 1];
  }

  for (let i = m; i <= visit.length; i++) {
    const diff = prefix_sum[i] - prefix_sum[i - m];

    diff > max ? (max = diff) : max;
  }

  max === -Infinity ? console.log("SAD") : console.log(max);
}

const [n, m] = [5, 2];
const visit = [1, 4, 2, 5, 1];
solution();
