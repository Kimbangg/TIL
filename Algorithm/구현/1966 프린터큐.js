"use strict";

class Queue {
  constructor() {
    this.store = [];
  }

  enqueue(item) {
    this.store.push(item);
  }

  dequeue() {
    return this.store.shift();
  }

  front() {
    return this.store[0];
  }
}

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

{
  let tmp, N, M, importance;
  let TEST = Number(input[0]) * 2;
  let imp = [];
  let maxList = [];
  let tmpList = [];
  let max, cnt;

  for (let i = 1; i <= TEST; i += 2) {
    const q = new Queue();
    imp = [];
    cnt = 0;

    // 입력 처리
    tmp = input[i].split(" ");
    N = Number(tmp[0]);
    M = Number(tmp[1]);
    importance = input[i + 1].split(" ");

    for (let j = 0; j < N; j++) {
      imp[j] = Number(importance[j]);
    }

    // N개의 문서와 중요도를 큐에 삽입
    for (let a = 0; a < N; a++) {
      q.enqueue([a, imp[a]]);
    }

    let loop = true;
    while (loop) {
      max = 0;
      maxList = [];
      tmpList = [];

      // 중요도 최댓값 구하기
      for (let b = 0; b < q.store.length; b++) {
        maxList = q.store[b];
        if (max < maxList[1]) {
          max = maxList[1];
        }
      }
      // 비교하기
      while (1) {
        tmpList = q.front();
        if (tmpList[1] == max) {
          // 현재 문서의 중요도가 가장 높으면
          cnt++; // cnt 1 증가 시키고
          q.dequeue(); // dequeue
          if (tmpList[0] == M) {
            // 현재 문서의 번호가 M이면
            console.log(cnt); // cnt 출력하고
            loop = false; // 루프 종료
          }
          break;
        } else {
          // 그렇지 않으면
          q.dequeue(); // 큐에서 삭제
          q.enqueue(tmpList); // 큐의 가장 뒤에 재배치
        }
      }
    }
  }
}
