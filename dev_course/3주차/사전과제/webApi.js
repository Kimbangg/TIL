const numbers = [0, 1, 2, 3, 4];

// 1. IIFE
for (var i = 0; i < numbers.length; i++) {
  (function (index) {
    setTimeout(function () {
      console.log(`${index} number ${numbers[index]}`);
    }, i * 1000);
  });
}

// 2. let

for (let i = 0; i < number.length; i++) {
  setTimeout(function () {
    console.log(`${i} number ${numbers[index]}`);
  }, i * 1000);
}

// 3. forEach

numbers.forEach(function (number, i) {
  setTimeout(() => {
    console.log(`${i} number ${numbers[index]}`);
  }, i * 1000);
});
