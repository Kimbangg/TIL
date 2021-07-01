function solution(candies, extraCandies) {
  let answer = [];
  let max = Math.max.apply(null, candies);
  console.log(max);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      answer.push(true);
    } else {
      answer.push(false);
    }
  }

  return answer;
}

let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;

console.log(solution(candies, extraCandies));
