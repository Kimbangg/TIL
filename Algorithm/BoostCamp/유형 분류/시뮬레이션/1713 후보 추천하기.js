function solve() {
  const answer = [];

  // 사진이 걸릴 수 있는 공간
  const photo_zone = [];

  // 기본 추천수가 1이기 때문에, 이를 기준으로 배열을 다시 만듬
  const retouched = [];

  for (let i = 0; i < people_count; i++) {
    retouched.push([recommends[i], 1]);
  }

  for (let i = 0; i < people_count; i++) {
    // 포토존에 자리가 남아 있을 때
    if (photo_zone.length <= n - 1) {
      photo_zone.push(retouched[i]);
    }

    // 포토존에 이미 사진이 꽉 찼을 때,
    else {
      // 포토존에 이미 추천자가 걸려있다면
      if (photo_zone[0].indexOf(retouched[i][0]) !== -1) {
        const idx = photo_zone[0].indexOf(retouched[i][0]);
        photo_zone[idx][1] += 1;
      }

      // 포토존에 사진도 꽉 차있고, 추천자의 사진이 없다면 => 삭제를 해야한다.
      else {
        for (let j = 0; j < photo_zone.length; j++) {
          // 만약 포토존의 추천 수 중에서, 들어 오려는 사람의 추천수보다 낮은 경우가 있을 때
          if (photo_zone[j][1] <= retouched[i][1]) {
            // 이미 사진이 걸려있다면, 패스
            if (
              photo_zone
                .map((each) => each[0] === retouched[i][0])
                .includes(true)
            ) {
              continue;
            }
            // 그렇지 않으면 사진을 걸어준다.
            photo_zone.splice(j, 1);
            photo_zone.push(retouched[i]);
            break;
          }
        }
      }
    }
  }

  // 사진을 순서대로 정렬하고, 앞자리만 answer 배열에 보내고.
  photo_zone.sort((a, b) => a[0] - b[0]);
  photo_zone.forEach((each) => answer.push(each[0]));
  // 간격을 주어 출력한다.
  console.log(answer.join(" "));
}

const n = 3;
const people_count = 9;
const recommends = [2, 1, 4, 3, 5, 6, 2, 7, 2];
solve();
