function solution(orders, course) {
  const answer = [];
  orders.sort((a, b) => a.length - b.length);

  for (let i = 0; i < orders.length; i++) {
    for (let j = i + 1; j < orders.length; j++) {
      if (orders[j].includes(orders[i])) {
        answer.push(orders[i]);
        break;
      }
    }
  }

  let result = answer.filter((each) => course.includes(each.length));

  return result.sort();
}

let orders = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
let course = [2, 3, 5];
console.log(solution(orders, course));
