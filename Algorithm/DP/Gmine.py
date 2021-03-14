T = int(input())

for tc in range(T) :
    n, m = map(int, input().split())
    array = list(map(int, input().split))
    dp = []
    index = 0
    for i in range(n) :
        dp.append(array[index:index+m])
        index += m


    for j in range(m) :
        for i in range(n) :
            dp[i][j] = mine[i][j] + max(dp[i-1][j], dp[i][j-1], dp[i+1][j-1])
        

    