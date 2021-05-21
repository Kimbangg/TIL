function solution(genres, plays) {
  const answer = [];

  const songs = {};
  const playCount = {};

  genres.forEach((genre, idx) => {
    if (!songs[genre]) songs[genre] = [];
    const info = {
      genre,
      play: plays[idx],
      index: idx,
    };

    songs[genre].push(info);
    playCount[genre] = (playCount[genre] || 0) + plays[idx];
  });

  // 재생수 객체를 배열로 변환
  const playCountArr = [];
  for (let key in playCount) {
    playCountArr.push({
      genre: key,
      count: playCount[key],
    });
  }

  playCountArr.sort((a, b) => b.count - a.count);

  playCountArr.forEach((el) => {
    const targetGenre = songs[el.genre];
    targetGenre.sort((a, b) => b.play - a.play);
    targetGenre[0] && answer.push(targetGenre[0].index);
    targetGenre[1] && answer.push(targetGenre[1].index);
  });

  return answer;
}

let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));
