function solution(genres, plays) {
  const answer = [];
  const map = {};

  for (let i = 0; i < genres.length; i++) {
    map[genres[i]] = (map[genres[i]] || 0) + plays[i];
  }

  console.log(map);
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

solution(genres, plays);
