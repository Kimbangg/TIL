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

    tmp = input[i].split(" ");
    N = Number(tmp[0]);
    M = Number(tmp[1]);
    importance = input[i + 1].split(" ");

    for (let j = 0; j < N; j++) {
      imp[j] = Number(importance[j]);
    }

    for (let a = 0; a < N; a++) {
      q.enqueue([a, imp[a]]);
    }

    let loop = true;
    while (loop) {
      max = 0;
      maxList = [];
      tmpList = [];


      for (let b = 0; b < q.store.length; b++) {
        maxList = q.store[b];
        if (max < maxList[1]) {
          max = maxList[1];
        }
      }

      while (1) {
        tmpList = q.front();
        if (tmpList[1] == max) {
          cnt++; 
          q.dequeue();
          if (tmpList[0] == M) {
            console.log(cnt);
            loop = false;
          }
          break;
        } else {
          q.dequeue();
          q.enqueue(tmpList);
        }
      }
    }
  }
}
