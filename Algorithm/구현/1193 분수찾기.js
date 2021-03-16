const fs = require("fs");
// 찾아야 하는 분자 자리인 X를 입력받는다.
let X = Number(fs.readFileSync("/dev/stdin").toString().trim());
// 층계를 대신 할 변수인 counter를 선언한다.
let counter = 1;

//  counter가 X보다 커진다는 것은 X가 위치하는 층계에 도착한다는 것을 의미
while (X > counter) {
  X = X - counter;
  // 층계를 높이면서 X에서 빼줌으로써 어디에 있는지 찾는다.
  counter += 1;
}

if (counter % 2 === 0) {
  console.log(`${X}/${counter - X + 1}`);
} else {
  console.log(`${counter - X + 1}/${X}`);
}
