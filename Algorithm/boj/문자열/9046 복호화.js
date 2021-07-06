function cntFx(ch, arr) {
  if ("a" <= ch && ch <= "z") {
    arr[ch.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }
}

function solution(str) {
  const arr = new Array(26).fill(0);
  str = str.split("").forEach((x) => cntFx(x, arr));

  const max = Math.max(...arr);

  if (arr.filter((x) => x === max).length !== 1) {
    console.log("?");
  } else {
    console.log(String.fromCharCode(arr.indexOf(max) + 97));
  }
}

const strings = ["asvdge ef ofmdofn", "xvssc kxvbv", "hull full suua pmlu"];

for (let i = 0; i < strings.length; i++) {
  solution(strings[i]);
}
