function checkCount(begin, word) {
  let count = 0;

  word.split("").forEach((char, idx) => {
    if (char !== begin[idx]) {
      count += 1;
    }
  });

  if (count <= 1) return true;
  else return false;
}

function solution(begin, target, words) {
  let answer = 0;

  for (let i = 0; i < words.length; i++) {
    if (checkCount(begin, words[i])) {
      begin = words[i];
      answer += 1;
    }
  }

  if (begin === target) return answer;
  else return 0;
}
