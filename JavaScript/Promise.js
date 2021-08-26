// 1. producer
// when new promise is created, the executor runs automatically

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Kimbangg");
//   }, 1000);
// });

// promise.then((value) => {
//   console.log(value);
// });

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(5000);
  return "🍍";
}

async function getBanana() {
  await delay(3000);
  return "🎾";
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
