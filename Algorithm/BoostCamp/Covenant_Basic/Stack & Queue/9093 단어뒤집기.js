function solution() {
  const rev = (word) => Array.from(word).reverse().join("");
  let words = s.split(" ");
  str += words.map(rev).join(" ") + "\n";

  return str;
}

let s = "i am happy";
let str = "";
console.log(solution());
