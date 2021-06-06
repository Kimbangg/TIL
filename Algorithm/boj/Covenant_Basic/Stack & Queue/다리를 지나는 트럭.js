function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let onBoard = [];
  let current_weight = 0;

  while (truck_weights) {
    answer += 1;

    if (onBoard.length === bridge_length) {
      current_weight -= onBoard.pop();
    }

    if (current_weight + truck_weights[0] <= weight) {
      let next_truck = truck_weights.shift();
      onBoard.unshift(next_truck);
      current_weight += next_truck;
    } else {
      onBoard.unshift(0);
    }

    if (truck_weights.length === 0) {
      answer += bridge_length;
      break;
    }
  }
  return answer;
}

let bridge_length = 2;
let weight = 10;
let truck_weights = [7, 4, 5, 6];

console.log(solution(bridge_length, weight, truck_weights));
