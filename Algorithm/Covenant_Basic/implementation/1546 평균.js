let scores = [40, 80, 60];
let max = Math.max(...scores);

for (let i = 0; i < scores.length; i++) {
  scores[i] = (scores[i] / max) * 100;
}

let average = scores.reduce((acc, value) => {
  return (acc += value);
});

average /= scores.length;

console.log(parseFloat(average));
