function solution(N, K, wait) {
  const plugs = [];
  let count = 0;

  for (let i = 0; i < K; i++) {
    if (!plugs.includes(wait[i])) {
      if (plugs.length < N) {
        plugs.push(wait[i]);
      } else {
        count++;
        let upPlug = plugs.slice();
        let inspectList = wait.slice(i + 1);

        for (let j = 0; j < inspectList.length; j++) {
          if (upPlug.length === 1) break;

          if (upPlug.includes(inspectList[j])) {
            let idx = upPlug.indexOf(inspectList[j]);
            upPlug.splice(index, 1);
          }
        }

        let idx = plugs.indexOf(upPlug[0]);
        plugs.splice(idx, 1);
        plugs.push(wait[i]);
      }
    }
  }
  return count;
}

let N = 2;
let K = 7;
const wait = [2, 3, 2, 3, 1, 2, 7];
console.log(wait.splice(4));
console.log(solution(N, K, wait));
