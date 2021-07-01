function solution() {
  const set_price = [];
  const break_up_price = [];

  for (let i = 0; i < guitar_shop.length; i++) {
    set_price.push(guitar_shop[0]);
    break_up_price.push(guitar_shop[1]);
  }

  set_price.sort((a, b) => a - b);
  break_up_price.sort((a, b) => a - b);

  const set_count = n / 6;
  const break_up_count = n % 6;

  console.log(set_count * set_price[0] + break_up_count * break_up_price[0]);
}

const [n, m] = [4, 2];

const guitar_shop = [
  [12, 3],
  [15, 4],
];

solution();
