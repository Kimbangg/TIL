const delay = (delayTime) => {
  return new Promise((resolve) => setTimeout(resolve, delayTime));
};

// const work = () => {
//   console.log("work run");
//   delay(1000)
//     .then(() => {
//       console.log("work 1 complete");
//       return delay(1000);
//     })
//     .then(() => {
//       console.log("work 2 complete");
//       return delay(1000);
//     })
//     .then(() => {
//       console.log("work 3 complete");
//       return delay(1000);
//     });
//   console.log("work is running");
// };

// work();

// async & await

const work1 = async () => {
  console.log("work run");

  await delay(1000);
  console.log("work 1 complete.");

  await delay(1000);
  console.log("work 2 complete.");

  await delay(1000);
  console.log("work 3 complete.");

  await delay(1000);
  console.log("work all complete.");
};

work1();

// async를 강조하는 2U

async function asyncRun() {
  return "hello";
}

// output : [AsyncFunction: asyncRun]
console.log(asyncRun);
asyncRun.then((message) => console.log(message));
