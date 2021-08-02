n = int(input())
list = [list(map(int, input().split())) for _ in range(n)]
result = float('inf')

for idx in range(3):

    dp = [[0] * n for _ in range(3)]

    for i in range(3):

        if i == idx:
            dp[i][0] = list[0][i]
            continue

        dp[i][0] = result

    for i in range(1, n):
        dp[0][i] = list[i][0] + min(dp[1][i - 1], dp[2][i - 1])
        dp[1][i] = list[i][1] + min(dp[0][i - 1], dp[2][i - 1])
        dp[2][i] = list[i][2] + min(dp[0][i - 1], dp[1][i - 1])

    for i in range(3):
        if i == idx:
            continue
        result = min(result, dp[i][-1])

print(result)
