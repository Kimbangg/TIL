// 단순 연산
function solution(n) {
  var answer = 0;
  while (n > 0) {
    if (n % 2 !== 0) {
      n = n - 1;

      answer = answer + 1;
    } else {
      n = n / 2;
    }
  }

  return answer;
}

// bfs를 하면 시간초과
function solution(n) {
  let result = 0;

  const queue = [1, 0];

  while (queue.length) {
    let cur = queue.shift();
    result = queue.shift();

    if (cur === n) {
      return result;
    } else {
      if (cur + 1 <= n) {
        queue.push(cur + 1, result + 1);
      }

      if (cur * 2 <= n) {
        queue.push(cur * 2, result);
      }
    }
  }

  return result;
}
