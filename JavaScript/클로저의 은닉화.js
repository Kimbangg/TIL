// function Counter() {
//   let privateCounter = 0;

//   function changeBy(val) {
//     privateCounter += val;
//   }

//   return {
//     increment: function () {
//       changeBy(1);
//     },
//     decrement: function () {
//       changeBy(-1);
//     },
//     value: function () {
//       return privateCounter;
//     },
//   };
// }

// const counter = Counter();
// console.log(counter.value());
// counter.increment();

// 5 5 5 5 5
function counting() {
  let i = 0;

  for (i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
