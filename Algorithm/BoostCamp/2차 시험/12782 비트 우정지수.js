function solution(love_bit) {
  let [prev, next] = love_bit;

  prev = prev.split("").map((e) => +e);
  next = next.split("").map((e) => +e);

  let one = 0;
  let zero = 0;

  for (let i = 0; i < prev.length; i++) {
    if (prev[i] !== next[i]) {
      if (next[i] === 1) one += 1;
      else zero += 1;
    }
  }

  return Math.max(one, zero);
}

const tc = 3;

const love_bit = [
  ["1011", "1100"],
  ["100101", "110100"],
  ["00110100", "10010111"],
];

for (let i = 0; i < tc; i++) {
  console.log(solution(love_bit[i]));
}

// function solution(love_bit) {
//   let answer = 0;
//   let [prev, next] = love_bit;
//   prev = prev.split("").map((e) => +e);
//   next = next.split("").map((e) => +e);

//   const prev_map = [0, 0];
//   const next_map = [0, 0];

//   for (let i = 0; i < prev.length; i++) {
//     prev_map[prev[i]] += 1;
//     next_map[next[i]] += 1;
//   }

//   const changeCount = [];

//   for (let i = 0; i < prev_map.length; i++) {
//     if (prev_map[i] > next_map[i]) {
//       changeCount.push(i, prev_map[i] - next_map[i]);
//       break;
//     }
//   }

//   changeCount.length === 0 ? answer : (answer += changeCount[1]);

//   for (let i = 0; i < prev.length; i++) {
//     if (changeCount[1] === 0) {
//       break;
//     }

//     if (prev[i] === changeCount[0] && prev[i] !== next[i]) {
//       prev[i] = 1 - prev[i];
//       changeCount[1] -= 1;
//     }
//   }

//   let diff = 0;
//   for (let i = 0; i < prev.length; i++) {
//     if (prev[i] !== next[i]) diff += 1;
//   }

//   answer += Math.floor(diff / 2);

//   console.log(answer);
// }
