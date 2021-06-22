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

////

// let visited;

// function dfs(idx, tickets, answer) {
//   visited[idx] = 1;
//   answer.push(tickets[idx][1]);

//   for (let i = 0; i < tickets.length; i++) {
//     if (tickets[idx][1] === tickets[i][0] && !visited[i]) {
//       dfs(i, tickets, answer);
//     }
//   }
// }

// function solution(tickets) {
//   tickets.sort();

//   const answer = ["ICN"];
//   visited = Array(tickets.length).fill(0);

//   for (let i = 0; i < tickets.length; i++) {
//     if (tickets[i][0] === "ICN" && !visited[i]) {
//       dfs(i, tickets, answer);
//     }
//   }

//   return answer;
// }
