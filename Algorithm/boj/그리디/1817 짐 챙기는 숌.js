function solution() {
  const total_weight = books.reduce((acc, value) => acc + value);

  return total_weight / m;
}

const [n, m] = [6, 10];
const books = [5, 5, 5, 5, 5, 5];
console.log(solution());
