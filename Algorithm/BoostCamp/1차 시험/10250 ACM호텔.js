function solution() {
  // 최초 층 수보다 적은 인원이 배정 -> 1호실에 배정
  if (target <= height) {
    return 1;
  }

  // 배정된 방이 꽉 차있다는 것을 의미한다.
  if (target > height * width) {
    return -1;
  }

  // 층으로 손님의 순서를 나누면, 각 번호가 몇번 꽉찼는지 알 수 있다.
  let choosedRoom = String(Math.ceil(target / height));
  let choosedFloor = String(target - height * Math.floor(target / height));

  if (choosedRoom.length === 1) {
    choosedRoom = "0" + choosedRoom;
  }

  console.log(choosedFloor + choosedRoom);
}

const [height, width, target] = [6, 12, 10];

solution(height, width, target);
