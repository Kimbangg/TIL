function solution(lottos, win_nums) {
  let getRank = (ele) => (ele > 1 ? 7 - ele : 6);

  let min = lottos.filter((lotto) => win_nums.includes(lotto)).length;
  let max = lottos.filter((lotto) => lotto === 0).length + min;

  return [getRank(max), getRank(min)];
}

let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];
console.log(solution(lottos, win_nums));
