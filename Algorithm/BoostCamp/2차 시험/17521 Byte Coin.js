function solution() {
  let coin_cnt = 0;

  for (let i = 0; i < price.length; i++) {
    if (price[i] < price[i + 1]) {
      if (coin_cnt <= 0) {
        coin_cnt = Math.floor(asset / price[i]);
        asset %= price[i];
      }
    } else if (price[i] > price[i + 1]) {
      asset += coin_cnt * price[i];
      coin_cnt = 0;
    }

    if (i === price.length - 1) {
      asset += coin_cnt * price[i];
      coin_cnt = 0;
    }
  }

  console.log(asset);
}

let [days, asset] = [5, 15];

const price = [5, 4, 4, 2, 7];
solution();
