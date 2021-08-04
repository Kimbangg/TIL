const message = "안녕하세요. 010-1234-5678 으로 연락주세요.";
const message2 = "안녕하세요. 010-1234-5687 말고 010-9876-5432으로  연락주세요";

const regExp = /\d{3}-\d{3,4}-\d{4}/;

// 1.test
// test => true || false
console.log(regExp.test(message));

// 2 exec
// exec => pattern에 일치한 문자열과 위치
console.log(regExp.exec(message));

// 3. match
// pattern에 일치한 문자열과 위치
console.log(message.match(regExp));

// 4. replace

// replace는 일치되는 부분을 원하는 내용, 값으로 변경
console.log(message.replace(regExp, "전화번호"));
// 모두 변경 하고 싶다면, /g 을 붙여주자 !
console.log(message2.replace(/\d{3}-\d{3,4}-\d{4}/g, "전화번호"));

// 5. match

// match => 찾은 문자열의 위치를 반환
console.log(message.search(regExp));

// 6. 압축

const raw = "AAAAABBBCCCCDDFFFKKK";
const raw_regExp = /(.)\1*/g;

const result = raw
  .match(raw_regExp)
  .reduce((a, b) => a + `${b.length}${b.slice(0, 1)}`, "");

console.log(result);
