function calLastTime(start, end) {
  let last_time = 0;

  if (start[0] === end[0]) {
    last_time = end[1] - start[1];
  } else {
    const hour_diff = end[0] - start[0];
    last_time = end[1] + 60 * hour_diff - start[1];
  }

  return last_time;
}

function isRepeated(lastTime, code) {
  if (lastTime > code.length) {
    return true;
  }

  return false;
}

function correctCodeLength(lastTime, code) {
  if (isRepeated(lastTime, code)) {
    lastTime = Math.floor(lastTime / code.length);
    code = code.repeat(lastTime);
  } else {
    code = code.substring(0, lastTime);
  }

  return code;
}

function changeSharpToAlpha(code) {
  code = code.split("");

  for (let i = 0; i < code.length - 1; i++) {
    if (code[i + 1] === "#") {
      code[i] = code[i].toLowerCase();
      code.splice(i + 1, 1);
    }
  }

  return code.join("");
}

function changeSmallToSharp(code) {
  code = code.split("");

  for (let i = 0; i < code.length; i++) {
    if (code[i].charCodeAt(0) >= 97) {
      code[i] = code[i].toUpperCase();
      code[i] += "#";
    }
  }

  return code.join("");
}

function determineAnswer(
  f_code,
  s_code,
  f_title,
  s_title,
  f_start,
  s_start,
  target
) {
  let answer = "";

  if (f_code.includes(target) && f_code.includes(target)) {
    if (f_start[0] > s_start[0]) {
      answer = s_title;
    } else if (f_start[0] < s_start[0]) {
      answer = f_title;
    } else if (f_start[0] === s_start[0]) {
      f_start[1] > s_start[1] ? (answer = s_title) : (answer = f_title);
    }
  } else if (f_code.includes(target)) {
    answer = f_title;
  } else if (s_code.includes(target)) {
    answer = s_title;
  } else {
    answer = "None";
  }

  return answer;
}

function solution(m, musicinfos) {
  let answer = 0;

  let [f_start, f_end, f_title, f_code] = musicinfos[0].split(",");
  let [s_start, s_end, s_title, s_code] = musicinfos[1].split(",");

  f_code = changeSharpToAlpha(f_code);
  s_code = changeSharpToAlpha(s_code);
  m = changeSharpToAlpha(m);

  // 첫 번째 음악의 시작 및 끝 시간을 : 기준으로 나눔
  f_start = f_start.split(":").map((e) => +e);
  f_end = f_end.split(":").map((e) => +e);

  let f_last_time = calLastTime(f_start, f_end);

  f_code = correctCodeLength(f_last_time, f_code);

  // 두 번째 음악의 시작 및 끝 시간을 : 기준으로 나눔
  s_start = s_start.split(":");
  s_end = s_end.split(":");

  let s_last_time = calLastTime(s_start, s_end);

  s_code = correctCodeLength(s_last_time, s_code);

  answer = determineAnswer(
    f_code,
    s_code,
    f_title,
    s_title,
    f_start,
    s_start,
    m
  );

  return answer;
}
