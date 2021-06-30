function solution() {
  let answer = 0;
  products.sort((a, b) => a - b);

  for (let i = products.length - 3; i >= 0; i -= 3) {
    products.splice(i, 1);
  }

  answer = products.reduce((acc, value) => acc + value);

  console.log(answer);
}

const products = [6, 4, 5, 5, 5, 5];
solution();
