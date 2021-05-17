function solution(strs) {
  let ans = [];
  let obj = {};

  for (let i = 0; i < strs.length; i++) {
    let tmp = strs[i].split("").sort().join("");
    if (!obj[tmp]) {
      obj[tmp] = [strs[i]];
    } else {
      obj[tmp].push(strs[i]);
    }
  }

  Object.values(obj).forEach((arr) => {
    ans.push(arr);
  });
  return ans;
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

solution(strs);

// 1번째 과제 : 어떻게 하면 같은 단어라고 여겨질 수 있을까?
