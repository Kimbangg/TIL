n = int(input())
p = []
for i in range(n):
    p.append(list(map(int, input().split())))
    
for i in range(1, len(p)):
    p[i][0] = min(p[i - 1][1], p[i - 1][2]) + p[i][0]
    # 빨간색을 선택 했을 때, 최소 값을 구하기 위해서는 파랑 / 초록을 더 했을 때를 비교 해야한다. 다른색도 동일!
    p[i][1] = min(p[i - 1][0], p[i - 1][2]) + p[i][1]
    p[i][2] = min(p[i - 1][0], p[i - 1][1]) + p[i][2]
    
#각 색깔을 사용했을 때의 최소값을 종합적으로 비교하여 출력하면 => RGB 거리의 최소 값이 출력!
print(min(p[n - 1][0], p[n - 1][1], p[n - 1][2]))

