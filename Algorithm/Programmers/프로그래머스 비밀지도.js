function changeNumToSharp(arr) {
  arr = arr.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 1) arr[i] = "#";
    else arr[i] = " ";
  }

  return arr.join("");
}

function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = parseInt(arr1[i].toString(2));
    arr2[i] = parseInt(arr2[i].toString(2));

    let sum = String(arr1[i] + arr2[i]);

    sum.length < n ? (sum = "0" + sum) : sum;
    answer.push(sum);
  }

  for (let i = 0; i < answer.length; i++) {
    answer[i] = changeNumToSharp(answer[i]);
  }

  return answer;
}
