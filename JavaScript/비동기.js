const fs = require("fs");

const aaa = () => {
  setTimeout(() => {
    console.log("맨위-위"); //d
  }, 0);
  console.log("맨위-아래"); // c
};

setTimeout(() => {
  fs.readFile("any.txt", () => {
    setTimeout(() => {
      console.log("중간-위"); // e
    }, 0);
    setImmediate(() => {
      console.log("중간-아래"); // f
    });
  });
}, 100);

setTimeout(() => {
  console.log("마지막-위"); // a
  aaa();
}, 0);

Promise.resolve().then(() => {
  aaa();
  console.log("맨 아래"); // b
});

// 맨위위 -> 중간위 -> 중간아래  -> 맨위위
