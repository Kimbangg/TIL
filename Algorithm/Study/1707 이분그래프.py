from collections import deque
import sys
input = sys.stdin.readline

# test case
k = int(input())


def bfs(start):
    visited[start] = 1
    queue = deque()
    queue.append(start)

    while queue:
        a = queue.popleft()
        for i in graph[a]:
            if visited[i] == 0:
                visited[i] = -visited[a]
                queue.append(i)
            else:
                if visited[i] == visited[a]:
                    return False
    return True


for i in range(k):
    v, e = map(int, input().split())
    # 그래프
    graph = [[] for i in range(v + 1)]
    # 방문 처리
    visited = [0 for i in range(v + 1)]

    for j in range(e):
        a, b = map(int, input().split())
        graph[a].append(b)
        graph[b].append(a)

    flag = True

    for k in range(1, v + 1):
        if visited[k] == 0:
            if not bfs(k):
                flag = False
                break
    # 배운 점..
    print("YES" if flag else "NO")
