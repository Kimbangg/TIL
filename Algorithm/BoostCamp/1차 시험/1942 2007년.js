function solution(month, days) {
  let start = 1;

  if (month === 1 && days === 1) {
    console.log("MONTH");
    return;
  }

  for (let i = 1; i < month; i++) {
    if (i === 2) {
      continue;
    } else if (i === 4 || i === 6 || i === 9 || i === 11) {
      start += 2;
    } else {
      start += 3;
    }

    start > 7 ? (start %= 7) : start;
  }

  let left = (days - 1) % 7;
}

const [month, days] = [3, 14];
solution(month, days);
