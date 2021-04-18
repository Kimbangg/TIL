function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let onBoard = [];
  let current_weight = 0;

  while (truck_weights) {
    answer += 1;

    // 다리가 트럭으로 꽉 차있을 때 현재 무게에서, 나가는 트럭의 무게를 빼준다.
    if (onBoard.length === bridge_length) {
      current_weight -= onBoard.pop();
    }

    // 들어 갈 공간이 있고, 무게도 남으면
    if (current_weight + truck_weights[0] <= weight) {
      let next_truck = truck_weights.shift();
      onBoard.unshift(next_truck);
      current_weight += next_truck;
    } else {
      onBoard.unshift(0);
    }
    // 다리가 비어있으면, 길이만큼의 시간이 소요
    if (truck_weights.length === 0) {
      answer += bridge_length;
      break;
    }
  }

  return answer;
}
