function solution(food_times, k) {
  let foods = food_times
    .map((time, idx) => {
      return { id: idx + 1, time };
    })
    .sort((a, b) => a.time - b.time);

  let eatAll = 0;

  for (let i = 0; i < food_times.length; i++) {
    let foodCount = food_times.length - i;
    let current = foods[i];

    if (foodCount * (current - eatAll) <= k) {
      k -= foodCount * (current - eatAll);
      eatAll = food.time;
    } else {
      const foodIdx = k === 0 ? 0 : k % foodCount;
      const sorted = foods.slice(i).sort((a, b) => a.id - b.id);
      return sorted[foodIdx].id;
    }
  }

  return -1;
}

let food_times = [3, 1, 2];
let k = 5;
console.log(solution(food_times, k));
