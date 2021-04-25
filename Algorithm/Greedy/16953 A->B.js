let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let count = 0;
const [A, B] = input[0].split(" ").map((e) => +e);

while (A !== B) {
  count += 1;
}

console.log(count);

// 연산은 2가지만 가능하다
// 2를 곱하거나, 1을 뒤에 붙이거나

String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } function solution(name) { let answer = 0; let str = ""; for(let i=0; i<name.length; i++){ str += 'A'; } let i=0; const visit = new Array(name.length).fill(false); while(true){ const ascii = name.charCodeAt(i); visit[i] = true; if(ascii != 65){ if(ascii <= 78){ answer += ascii - 65; }else{ answer += 91 - ascii; } } str = str.replaceAt(i, name.charAt(i)); if(str == name) break; for(let j=1; j<name.length; j++){ if(i+j < name.length && name.charAt(i+j) != 'A' && !visit[i+j]){ i += j; answer +=j; break; } if(i-j >= 0 && name.charAt(i-j) != 'A' && !visit[i-j]){ i -= j; answer +=j; break; } if(i-j < 0 && name.charAt( (name.length + i) - j ) != 'A' && !visit[(name.length + i) - j]){ i = (name.length + i) - j; answer +=j; break; } } } return answer; }

출처: https://kis6473.tistory.com/85 [KIS]