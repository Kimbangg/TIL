function solution(n, wires) {
  let answer = 0;

  // 두 개로 분리 되었을 때 값의 차이를 담아주는 함수
  const diff_arr = [];

  // 인접 행렬을 만들어 주는 함수
  function setConnection(map, v1, v2) {
    v1 -= 1;
    v2 -= 1;
    map[v1][v2] = 1;
    map[v2][v1] = 1;
  }

  // dfs 함수
  function dfs(idx, visited, map) {
    // 방문처리
    visited[idx] = 1;
    answer += 1;
    // 순환하면서, 방문 가능한 곳으로 재귀
    for (let i = 0; i < map.length; i++) {
      if (map[idx][i] === 1 && !visited[i]) {
        dfs(i, visited, map);
      }
    }
  }

  for (let i = 0; i < n - 1; i++) {
    const tmpArr = [];
    // 인접행렬
    const map = Array.from(new Array(n), () => new Array(n).fill(0));
    // 방문처리
    const visited = Array(n).fill(0);

    // 하나씩 제거하면서, 인접 행렬을 수행
    // (=> 브루트 포스)
    for (let j = 0; j < wires.length; j++) {
      if (i === j) continue;
      const [v1, v2] = wires[j];
      setConnection(map, v1, v2);
    }

    // 만들어진 인접 행렬을 바탕으로 dfs 수행
    for (let i = 0; i < map.length; i++) {
      if (!visited[i]) {
        answer = 0;
        dfs(i, visited, map);
        tmpArr.push(answer);
      }
    }

    // 값 비교 후에, diff 배열에 담기.
    if (tmpArr[0] > tmpArr[1]) diff_arr.push(tmpArr[0] - tmpArr[1]);
    else diff_arr.push(tmpArr[1] - tmpArr[0]);
  }

  // 최소 값 출력
  answer = Math.min(...diff_arr);
  return answer;
}
