function solution() {
  let start = 0;
  let end = 0;
  const answer = [];

  for (let i = 0; i < road.length; i++) {
    if (road[i] < road[i + 1]) end = i + 1;
    else {
      const diff = road[end] - road[start];
      answer.push(diff);

      start = i + 1;
      end = i + 1;
    }
  }

  return Math.max(...answer);
}
2;

const road = [12, 20, 1, 3, 4, 4, 11, 1];
solution(road);
