function solution(routes) {
  let answer = 1;
  let installation = routes[0][1];
  routes.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < routes.length; i += 1) {
    const [start, end] = routes[i];
    // 끝나는 지점이 새로운 차가 들어오는 진입점보다 값이 크다는 것은
    // 새로운 차가 올라와도, 이전의 차가 도로 위에 존재 한다는 것인데
    if (start <= installation) {
      // 이 때, 이전의 차가 나가는 시점이 이후에 들어온 차보다 늦는다면
      // 이후의 차가 나가기 전에만 촬영이 되면 된다는 것이다. => 즉 이후에 들어온 차가 나가는 시점이 기준이 되고,
      if (end < installation) {
        installation = end;
      }
      // 그렇지 않다면 기준을 이전 차가 나가는 시간을 기준으로 유지한다.
    }
    // 만약에 올라 오는 시점보다 이전의 차가 먼저 나가면, 이전 차의 촬영을 위해 설치
    else {
      answer += 1;
      installation = end;
    }
  }

  return answer;
}
