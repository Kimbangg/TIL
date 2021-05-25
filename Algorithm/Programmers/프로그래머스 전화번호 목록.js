function solution(phone_book) {
  phone_book.sort((a, b) => b - a);

  for (let i = 0; i < phone_book.length; i++) {
    for (let j = 0; j < phone_book.length; j++) {
      if (phone_book[i] !== phone_book[j]) {
        if (phone_book[j].includes(phone_book[i])) {
          return false;
        }
      }
    }
  }

  return true;
}

const phone_book = ["119", "97674223", "1195524421"];
console.log(solution(phone_book));
