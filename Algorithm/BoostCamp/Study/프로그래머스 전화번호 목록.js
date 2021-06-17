function solution(phone_book) {
  const hashMap = {};

  for (let phoneNumber of phone_book) {
    hashMap[phoneNumber] = 1;
  }

  for (let phoneNumber of phone_book) {
    let temp = "";

    for (let number of phoneNumber) {
      temp += number;

      if (hashMap[temp] && temp != phoneNumber) {
        return false;
      }
    }
  }

  return true;
}
const phone_book = ["119", "97674223", "1195524421"];
console.log(solution(phone_book));
