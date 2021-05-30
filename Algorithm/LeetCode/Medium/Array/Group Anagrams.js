function solution(strs) {
  const answer = [];
  const obj = {};

  for (let i = 0; i < strs.length; i++) {
    let tmp = strs[i].split("").sort().join("");

    if (!obj[tmp]) {
      obj[tmp] = [strs[i]];
    } else {
      obj[tmp].push(strs[i]);
    }
  }

  Object.values(obj).forEach((arr) => {
    answer.push(arr);
  });

  return answer;
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(solution(strs));
