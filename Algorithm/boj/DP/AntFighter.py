n = int(input())

grocery = list(map(int, input().split()))
dp = [0] * 100
dp [1]  = grocery[1]


for i in range(2, n) :
    dp[i] = max(dp[i-1], dp[i-2]+grocery[i])
print(dp[n-1])