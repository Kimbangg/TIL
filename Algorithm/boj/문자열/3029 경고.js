function solution(start, end) {
  let [sHour, sMin, sSec] = start.split(":").map((e) => +e);
  let [eHour, eMin, eSec] = end.split(":").map((e) => +e);

  let t1 = sHour * 60 * 60 + sMin * 60 + sSec;
  let t2 = eHour * 60 * 60 + eMin * 60 + eSec;

  let diff = t2 - t1;

  eHour = Math.floor(diff / 60 / 60);
  eMin = Math.floor((diff / 60) % 60);
  eSec = diff % 60;

  console.log(eHour, eMin, eSec);
}

const start = "12:34:56";
const end = "14:36:22";

solution(start, end);
