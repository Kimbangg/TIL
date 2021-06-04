function primecheck(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function solution() {
  let total = 0;
  s = s.split("").forEach((s) => {
    if (65 <= s.charCodeAt() < 97) {
      total += s.charCodeAt() - 38;
    } else {
      total += s.charCodeAt() - 97;
    }
  });

  if (primecheck(total)) {
    console.log("It is a prime word.");
  } else {
    console.log(" It is not a prime word.");
  }
}

let s = "UFRN";
solution();
