function solution(numbers) {
  let answer = 0;
  numbers = numbers.split("");
  let numCheck = new Set();
  makeNumber("", numbers);

  function isPrimeNumber(n) {
    if (n < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }

  function makeNumber(cur, numbers) {
    if (cur.length > 0) {
      if (!numCheck.has(Number(cur))) {
        numCheck.add(Number(cur));

        if (isPrimeNumber(Number(cur))) {
          answer++;
        }
      }
    }

    for (let i = 0; i < numbers.length; i++) {
      let tmpArr = numbers.slice(0);
      tmpArr.splice(i, 1);
      makeNumber(cur + numbers[i], tmpArr);
    }
  }

  return answer;
}
