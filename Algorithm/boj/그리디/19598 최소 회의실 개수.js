function solution() {
  let cnt = 0;
  let ans = 0;

  const tmpMeeting = [];

  for (let i = 0; i < meeting.length; i++) {
    tmpMeeting.push([meeting[i][0], 1]);
    tmpMeeting.push([meeting[i][1], -1]);
  }

  tmpMeeting.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < tmpMeeting.length; i++) {
    cnt += tmpMeeting[i][1];
    if (tmpMeeting[i + 1] && tmpMeeting[i][0] === tmpMeeting[i + 1][0])
      continue;
    if (ans < cnt) ans = cnt;
  }
  console.log(ans);
}

const meeting = [
  [1, 3],
  [2, 4],
  [3, 5],
];

solution();
