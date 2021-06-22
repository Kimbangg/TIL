function solution(tickets) {
  tickets.sort();
  let visited = Array(tickets.length).fill(false);
  let answer = [];

  function dfs(start, cnt, res) {
    if (cnt === tickets.length && answer.length === 0) {
      answer = res;
      return;
    }
    for (let i = 0; i < tickets.length; i += 1) {
      if (visited[i]) continue;

      if (tickets[i][0] === start) {
        visited[i] = true;
        dfs(tickets[i][1], cnt + 1, [...res, tickets[i][1]]);
        visited[i] = false;
      }
    }
  }
  dfs("ICN", 0, ["ICN"]);
  return answer;
}
