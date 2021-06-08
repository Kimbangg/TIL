function solution(n, times) {
  times.sort((a, b) => a - b);

  let min = 1;
  let max = n * times[times.length - 1];
  let answer = max;

  while (min <= max) {
    let count = 0;
    let mid = Math.floor((min + max) / 2);

    for (let i = 0; i < times.length; i++) {
      count += Math.floor(mid / times[i]);

      if (count >= n) {
        answer = Math.min(mid, answer);
      }
    }

    if (count >= n) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return answer;
}

let n = 6;
let times = [7, 10];
console.log(solution(n, times));

// function solution() {
//   let time = Infinity;

//   for (let i = 1; i <= n; i++) {
//     let tmpValue = Math.max(times[0] * i, times[1] * (n - i));

//     if (time > tmpValue) {
//       time = tmpValue;
//     }
//   }
//   console.log(time);
// }
