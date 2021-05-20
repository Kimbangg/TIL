function solution(s) {
  let answer = 0;
  const countArr = [];

  for (let i = 0; i < s.length; i++) {
    let jump = i + 1;
    let count = 1;
    let newStr = "";

    for (let j = 0; j < s.length; j = j + jump) {
      let currentStr = s.substring(j, j + jump);
      let nextStr = s.substring(j + jump, j + jump + jump);

      if (currentStr === nextStr) {
        count += 1;
      } else {
        if (count !== 1) {
          newStr += count + currentStr;
        } else {
          newStr += currentStr;
        }
        count = 1;
      }
    }
    countArr.push(newStr.length);
  }

  answer = Math.min(...countArr);

  return answer;
}

let s = "aabbaccc";
console.log(solution(s));
