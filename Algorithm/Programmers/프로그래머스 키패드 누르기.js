function calDistance(number, curLeft, curRight, location, hand) {
  const disLeft =
    Math.abs(location[number][0] - location[curLeft][0]) +
    Math.abs(location[number][1] - location[curLeft][1]);
  const disRight =
    Math.abs(location[number][0] - location[curRight][0]) +
    Math.abs(location[number][1] - location[curRight][1]);
  if (disLeft === disRight) return hand === "left" ? "L" : "R";
  return disLeft > disRight ? "R" : "L";
}

function solution(numbers, hand) {
  let answer = "";
  const location = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let curLeft = "*";
  let curRight = "#";

  numbers.forEach((number) => {
    if (number % 3 === 1) {
      answer += "L";
      curLeft = number;
    } else if (number !== 0 && number % 3 === 0) {
      answer += "R";
      curRight = number;
    } else {
      answer += calDistance(number, curLeft, curRight, location, hand);
      answer[answer.length - 1] === "L"
        ? (curLeft = number)
        : (curRight = number);
    }
  });

  return answer;
}
let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = "right";
console.log(solution(numbers, hand));
