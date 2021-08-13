function delay(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString());
  }, sec * 1000);
}

// 아래와 같이 코드를 작성하면 [1초 뒤]에 거의 동시에 실행된다.
// delay(1, (result) => {
//   console.log(result);
// });

// delay(1, (result) => {
//   console.log(result);
// });

// delay(1, (result) => {
//   console.log(result);
// });

// 그러면 이를 1 -> 2(1초의 1초 뒤) -> 3로 실행하려면?
delay(1, (result) => {
  console.log(1, result);

  delay(1, (result) => {
    delay(1, (result) => {
      console.log(3, result);
    });

    console.log(2, result);
  });
});

// Promise로 사용하려면?

function delayP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, sec * 1000);
  });
}

delayP(1)
  .then((result) => {
    console.log(1, result);
    return delayP(1);
  })
  .then((result) => {
    console.log(2, result);
    return delayP(1);
  })
  .then((result) => {
    console.log(3, result);
    return "wow";
  })
  .then((result) => {
    console.log(result);
  });
