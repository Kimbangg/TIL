const fs = require("fs");

const aaa = () => {
  setTimeout(() => {
    console.log("맨위-위");
  }, 0);
  console.log("맨위-아래");
};

setTimeout(() => {
  fs.readFile("any.txt", () => {
    setTimeout(() => {
      console.log("중간-위");
    }, 0);
    setImmediate(() => {
      console.log("중간-아래");
    });
  });
}, 100);

setTimeout(() => {
  console.log("마지막-위");
  aaa();
}, 0);

Promise.resolve().then(() => {
  aaa();
  console.log("맨 아래");
});
