function solution() {
  const map = {};

  for (let i = 0; i < password.length; i++) {
    map[password[i]] = (map[password[i]] || 0) + 1;
  }

  for (let i = 0; i < password.length; i++) {
    password[i] = password[i].split("").reverse().join("");

    // in 함수도 좋은 것 같습니다.
    // if ( password[i] in map )
    if (map[password[i]]) {
      let length = Math.floor(password[i].length / 2);
      console.log(password.length);
      console.log(password[i][length]);
      break;
    }
  }
}

let password = ["las", "god", "psala", "sal"];
solution();

// function solution() {
//   for (let i = 0; i < password.length; i++) {
//     password[i] = password[i].split("").reverse().join("");

//     for (let j = 0; j < password.length; j++) {
//       if (i !== j) {
//         if (password[i] === password[j]) {
//           let length = Math.floor(password[i].length / 2);
//           console.log(password[i].length);
//           console.log(password[i][length]);
//           break;
//         }
//       }
//     }
//   }
// }
