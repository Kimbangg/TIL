function solution() {
  let min = prices[0];
  let result = 0;

  prices.forEach((price) => {
    if (price < min) {
      min = price;
    }
    result = result > price - min ? result : price - min;
  });

  return result;
}

let prices = [7, 1, 5, 3, 6, 4];
console.log(solution());
