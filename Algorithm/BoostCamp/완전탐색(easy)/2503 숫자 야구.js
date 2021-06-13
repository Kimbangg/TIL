function isStrike(answer, hint) {
  for (let i = 0; i < 3; i++) {
    let cnt = 0;
    if (answer[i] === hint[i]) cnt += 1;
  }
  return cnt;
}

function isBall(answer, hint) {
  let cnt = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i !== j) {
        if (answer[i] === hint[j]) cnt++;
      }
    }
  }
  return cnt;
}

function dfs(res, visited) {
  if (res.length === 3) {
    const answer = res.join("");
    let flag = true;

    for (const [hint, s_cnt, b_cnt] of hints) {
      const strHint = hint.toString();

      const strike = isStrike(answer, strHint);

      if (strike !== s_cnt) {
        flag = false;
        break;
      }

      const ball = isBall(answer, strHint);

      if (ball !== b_cnt) {
        flag = false;
        break;
      }
    }
    if (flag) ans.push(answer);
    return;
  }

  for (let i = 1; i <= 9; i++) {
    if (!visited[i]) {
      res.push(i);
      visited[i] = 1;
      dfs(res, visited);
      visited[i] = 0;
      res.pop();
    }
  }
}

let hints = [
  [123, 1, 1],
  [356, 1, 0],
  [327, 2, 0],
  [489, 0, 1],
];

const visited = Array(10).fill(0);
const ans = [];
dfs([], visited);
console.log(ans);
