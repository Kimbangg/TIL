T = int(input());

for _ in range(T):
    n = int(input())
    stock = list(map(int,input().split()))
    answer = 0 
    maxStock = stock[-1]
    for i in range(n-2,-1,-1):
        if stock[i] > maxStock: 
            maxStock = stock[i]
        else:
            answer += maxStock-stock[i]
    print(answer)