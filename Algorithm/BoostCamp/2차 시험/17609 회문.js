function checkSimilar(word, left, right) {
  while (left < right) {
    if (word[left] === word[right]) {
      left += 1;
      right -= 1;
    } else {
      return false;
    }
    return true;
  }
}

function solution(word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] === word[right]) {
      left += 1;
      right -= 1;
    } else {
      if (
        checkSimilar(word, left + 1, right) ||
        checkSimilar(word, left, right - 1)
      ) {
        return 1;
      }
      return 2;
    }
  }
  return 0;
}

const t = 7;

const words = [
  "abba",
  "summuus",
  "xabba",
  "xabbay",
  "comcom",
  "comwwmoc",
  "comwwtmoc",
];

for (let i = 0; i < t; i++) {
  console.log(solution(words[i]));
}

// function solution(word) {
//   word = word.split("");
//   let reversed = word.slice().reverse();

//   if (word.length % 2 === 0) {
//     if (word.join("") === reversed.join("")) {
//       return 0;
//     } else {
//       return 2;
//     }
//   } else {
//     let word_typo = "";
//     let reversed_typo = "";

//     for (let i = 0; i < word.length; i++) {
//       if (word[i] !== reversed[i]) {
//         word_typo = word[i];
//         reversed_typo = reversed[i];
//         break;
//       }
//     }

//     const word_typo_of_word = word.indexOf(word_typo);
//     const word_typo_of_reve = reversed.indexOf(word_typo);

//     const reversed_typo_of_word = word.indexOf(reversed_typo);
//     const reversed_typo_of_reve = reversed.indexOf(reversed_typo);

//     if (
//       word.splice(word_typo_of_word, 1).join("") ===
//         reversed.splice(word_typo_of_reve, 1).join("") ||
//       word.splice(reversed_typo_of_word, 1).join("") ===
//         reversed.splice(reversed_typo_of_reve, 1).join("")
//     ) {
//       return 1;
//     } else {
//       return 2;
//     }
//   }
// }
