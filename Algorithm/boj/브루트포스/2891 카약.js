function solve(n, reserved, lost) {
  let realLost = lost.filter((a) => !reserved.includes(a));
  let realReserved = reserved.filter((a) => !lost.includes(a));

  let haved = realLost.filter((a) => {
    let b = realReserved.find((r) => Math.abs(r - a) <= 1);
    if (!b) return true;

    realReserved = realReserved.filter((r) => r !== b);
  }).length;

  console.log(haved);
}

const n = 5;
const lost = [2, 4];
const reserved = [3];
console.log(solve(n, reserved, lost));
