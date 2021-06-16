function dfs(cnt) {
  if (cnt === n) {
    permuArr.push(output.join(""));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;

    visited[i] = 1;
    output.push(i);
    dfs(cnt + 1);
    output.pop();
    visited[i] = 0;
  }
}

function solve() {
  const index = permuArr.indexOf(target);

  if (index == permuArr.length - 1) {
    return -1;
  } else {
    return permuArr[index + 1].split("").join(" ");
  }
}

const n = 4;
const permuArr = [];
const output = [];
const visited = Array(n).fill(0);
const nums = Array.from({ length: n }, (v, i) => i + 1);
const target = "1234";

dfs(0);
console.log(solve());
