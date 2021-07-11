function solution(deposit) {
  // 입,출금 기록을 관리 하기 위한 "스택"
  // 스택을 사용한 이유는, 출금 시 마지막 입금 내역부터 빼기 때문입니다.
  const account = [];

  for (let i = 0; i < deposit.length; i++) {
    let cur = deposit[i];
    // 입금을 하는 경우
    if (cur >= 1) {
      account.push(cur);
    }
    // 출금을 하는 경우
    else {
      let last_deposited = 0;
      const abs_cur = Math.abs(cur);

      // 출금 금액이 마지막 입금 금액과 같으면, pop 으로 입금 내역 제거
      if (account[account.length - 1] === abs_cur) {
        account.pop();
      }

      // 마지막 입금 금액이 출금 내역보다 크다면
      // 입금 금액에서 출금 내역을 제거 한 뒤, 다시 account에 넣어준다.
      else if (account[account.length - 1] > abs_cur) {
        last_deposited = account.pop() - abs_cur;
        account.push(last_deposited);
      }

      // 마지막 입금 내역이 출금 내역보다 작거나 같으면
      else if (account[account.length - 1] <= abs_cur) {
        // 입금된 금액의 합이 출금 내역보다 커질 때까지
        // 입금 내역을 빼서 더해준다.
        while (last_deposited < abs_cur) {
          last_deposited += account.pop();
        }
        // 입금 내역의 합에서 출금 내역을 제거 한 뒤
        last_deposited -= abs_cur;
        // 만약 그 값이 0 이면 입금 할 금액이 없다는 것 => push x
        // 값이 0보다 크면 입금
        last_deposited === 0 ? account : account.push(last_deposited);
      }
    }
  }

  return account;
}
