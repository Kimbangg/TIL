import sys
input = sys.stdin.readline
n = int(input())
s = [list(input().split()) for i in range(n)]
for i in range(n):
    for j in s[i]:
        print(''.join(reversed(list(j))), end=" ")
    print()
