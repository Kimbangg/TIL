function solution() {
  if (A === B) return 0;

  // 정렬 했을 때, 다른 값이라면 순서로 해결 불가능.
  const sortedA = A.split("").sort().join("");
  const sortedB = B.split("").sort().join("");
  if (sortedA !== sortedB) return -1;

  // 뒤집어서 같으면 2로 나눈 후, 반올림
  const reversedA = A.split("").reverse().join("");
  if (reversedA === B) return Math.ceil(A.length / 2);

  let ans = A.length;
  let idx = ans - 1;
  // 뒤에서부터 이동하면서 무조건 옮겨야 하는 경우
  for (let i = idx; i >= 0; i--) {
    if (A[i] === B[idx]) {
      ans -= 1;
      idx -= 1;
    }
  }

  return ans;
}

let A = "DCABA";
let B = "DACBA";
console.log(solution(A, B));
