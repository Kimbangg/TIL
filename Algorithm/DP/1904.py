import sys

N = int(sys.stdin.readline())
DP = [0] * 1000001

DP[1] = 1
DP[2] = 2

for i in range(3, N+1):
    DP[i] = (DP[i-1] + DP[i-2]) % 15746

print(DP[N])

