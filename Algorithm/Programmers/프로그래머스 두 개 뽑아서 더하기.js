function solution(numbers) {
  let answer = [];
  numbers.sort((a, b) => a - b);
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];

      if (answer.indexOf(sum) < 0) {
        answer.push(sum);
      }
    }
  }

  console.log(answer);
}

let numbers = [2, 1, 3, 4, 1];
solution(numbers);
