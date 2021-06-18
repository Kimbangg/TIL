function isPrime(n) {
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
function solution(prev, next) {
  let sum = Number(prev) + Number(next);
  let primeArr = [];

  for (let i = 0; i <= sum; i++) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
  }

  if (sum < 4) {
    console.log("NO");
  } else if (sum % 2 === 0) {
    console.log("YES");
  } else {
    if (isPrime(sum - 2)) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }

  // let left = 0,
  //   right = primeArr.length - 1;

  // while (left < right) {
  //   let primeSum = primeArr[left] + primeArr[right];

  //   if (primeSum === sum) {
  //     console.log("YES");
  //     return;
  //   } else if (primeSum < sum) {
  //     left++;
  //   } else if (primeSum > sum) {
  //     right--;
  //   }
  // }
  // console.log("NO");
}

let splited = ["3 4", "3 5"];

for (let i = 0; i < splited.length; i++) {
  let [prev, next] = splited[i].split(" ");
  solution(prev, next);
}
