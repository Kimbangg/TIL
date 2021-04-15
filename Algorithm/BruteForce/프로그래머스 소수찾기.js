let cur = "";
let numbers = ["1", "7"];


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
}