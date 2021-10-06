import heapq

n=int(input())
payList=[]
for i in range(n):
  payList.append(list(map(int, input().split())))

# 강연 날짜 별로, 데이터를 정리.
payList.sort(key=lambda x: (x[1]))
# 우선 순위 큐
pList=[]

for i in payList:
  heapq.heappush(pList, i[0])
  # i[1] 보다 길이가 길다는 것은, 대학에서 원했던 강연 기간을 초과했다는 뜻으로
  # 교수는 그 대학의 강의를 진행 할 수 없다 => 고로 제거.
  if (len(pList)>i[1]):
    heapq.heappop(pList)

print(sum(pList))