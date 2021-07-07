function dfs(idx, cnt) {
  if (cnt === M) {
    result += `${output.join(" ")}\n`;
    return;
  }

  for (let i = idx; i < N; i++) {
    output.push(nums[i]);
    dfs(i, cnt + 1);
    output.pop();
  }
}

let result = "";
const output = [];
const [N, M] = [4, 2];
const nums = [9, 8, 7, 1];
nums.sort((a, b) => a - b);

dfs(0, 0);
console.log(result.trim());
