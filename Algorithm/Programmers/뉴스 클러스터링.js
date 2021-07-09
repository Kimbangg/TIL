function makeMultiArr(text) {
  const result = [];

  for (let i = 0; i < text.length - 1; i++) {
    const node = text.substr(i, 2);

    if (node.match(/[A-Za-z]{2}/)) {
      result.push(node.toLowerCase());
    }
  }

  return result;
}

function solution(str1, str2) {
  const arr1 = makeMultiArr(str1).sort();
  const arr2 = makeMultiArr(str2).sort();
  const set = new Set([...arr1, ...arr2]);
  console.log(set);
  let union = 0;
  let intersection = 0;

  set.forEach((item) => {
    console.log(item);
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });

  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}

const str1 = "handshake";
const str2 = "shake hands";
solution(str1, str2);
