function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);

  for (let i = 0, j = people.length - 1; i <= j; i++) {
    // 가장 가벼운 사람과 무거운 사람을 동시에 태워서
    //  만약 둘이 탈 수 있으면 무거운 사람 + 가벼운 사람 승차
    if (people[i] + people[j] <= limit) {
      console.log(people[i] + people[j]);
      j--;
    }
    // 둘이 탈 수 없으면 1명만 승차
    answer++;
  }
  return answer;
}

let people = [50, 50, 70, 80];
let limit = 100;

console.log(solution(people, limit));
