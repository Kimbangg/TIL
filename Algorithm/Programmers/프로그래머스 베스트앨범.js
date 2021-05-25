function solution(genres, plays) {
  const answer = [];
  const songs = {};
  const playCount = {};

  for (let i = 0; i < genres.length; i++) {
    if (!songs[genres[i]]) songs[genres[i]] = [];

    const info = {
      genre: genres[i],
      play: plays[i],
      index: i,
    };
    songs[genres[i]].push(info);
    playCount[genres[i]] = (playCount[genres[i]] || 0) + plays[i];
  }

  const playCountArr = [];
  for (let key in playCount) {
    playCountArr.push({
      genre: key,
      count: playCount[key],
    });
  }

  playCountArr.sort((a, b) => b.count - a.count);

  playCountArr.forEach((ele) => {
    const targetGenre = songs[ele.genre];
    targetGenre.sort((a, b) => b.play - a.play);
    targetGenre[0] && answer.push(targetGenre[0].index);
    targetGenre[1] && answer.push(targetGenre[1].index);
  });

  return answer;
}

let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 150, 800, 2500];
console.log(solution(genres, plays));
