import sys
from collections import deque
 
input = sys.stdin.readline
 
n, m, k, x = map(int, input().split())
visited = [False] * (n + 1)
 
path = [[] for _ in range(n + 1)]

for _ in range(m):
    a, b = map(int, input().split())
    path[a].append(b)

print(path)
 
answer = list()
queue = deque()
queue.append((x, 0))

while queue:
    town, count = queue.popleft()
    if count == k:
        answer.append(town)
    elif count < k:
        for con in path[town]:
            if not visited[con]:
                visited[con] = True
                queue.append((con, count + 1))
 
if len(answer) == 0:
    print(-1)
else:
    answer.sort()
    for ans in answer:
        print(ans)