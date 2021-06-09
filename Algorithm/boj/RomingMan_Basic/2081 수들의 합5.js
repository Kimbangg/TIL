function solution(target) {
  let end = 1;
  let sum = 1;
  let count = 0;

  for (let start = 1; start <= target; start++) {
    while (sum < target && end < target) {
      end += 1;
      sum += end;
    }

    if (sum === target) {
      count += 1;
    }

    sum -= start;
  }
  console.log(count);
}

let target = 10;
solution(target);

// function solution(target) {
//   const arr = Array.from({ length: target }, (v, i) => i + 1);
//   let result = 0;
//   let end = 0;
//   let sum = 0;

//   for (let start = 0; start < target; start++) {
//     while (sum < target && end < target) {
//       sum += arr[end];
//       end += 1;
//     }

//     if (sum === target) {
//       result += 1;
//     }

//     sum -= arr[start];
//   }
//   console.log(result);
// }
