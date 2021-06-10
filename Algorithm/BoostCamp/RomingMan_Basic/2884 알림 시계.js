function solve(H, M) {
  let T = (H * 60 + M - 45 + 24 * 60) % (24 * 60);

  M = T % 60;
  H = Math.floor(T / 60);

  console.log(H, M);
}

let [H, M] = [10, 10];
solve(H, M);
