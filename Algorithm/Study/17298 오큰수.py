n = int(input())
nums = list(map(int, input().split()))
# 스택
stack = []
# 정답 배열을 -1로 초기화
ans = [-1 for _ in range(n)]

for i in range(len(nums)):
    # 스택이 비어 있지 않고(= 이전에는 자신보다 큰 값을 만난 경우가 없고)
    # i의 값이 스택 값보다 크다면 ( = 자신보다 큰 값을 만났을 때)
    while len(stack) != 0 and nums[stack[-1]] < nums[i]:
        # i의 값으로 변경해준다.
        ans[stack.pop()] = nums[i]
    stack.append(i)

print(*ans)
