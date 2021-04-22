function solution(numbers) {
  let answer = "";
  numbers.sort((a, b) => {
    return Number(String(b) + String(a)) - Number(String(a) + String(b));
  });
  numbers.forEach((elem) => {
    console.log(elem);
    answer += elem + "";
  });

  console.log(answer);
  if (answer[0] === "0") {
    return 0;
  }
  return 0;
}

let numbers = [6, 10, 2];
console.log(solution(numbers));
