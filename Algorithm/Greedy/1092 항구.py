import sys
N = int(input())
cranes = map(int, sys.stdin.readline().split()) 
M = int(input())
boxes = map(int, sys.stdin.readline().split())


cranes = sorted(cranes, reverse=True)
boxes = sorted(boxes, reverse=True)

# 무게 제한이 제일 높은 크레인도 제일 무거운 화물을 들 수 없는 경우
if boxes[0] > cranes[0] : 
    print(-1)
    exit()

answer = 0
# 화물이 전부 옮겨질 때까지
while len(boxes) > 0:
    answer += 1
    # 무게제한을 돌면서 옮길 수 있는 화물을 옮김
    for l in cranes:
        for j in range(len(boxes)):
            if l >= boxes[j]: # 화물을 옮길 수 있으면
                del boxes[j]
                break
print(answer)