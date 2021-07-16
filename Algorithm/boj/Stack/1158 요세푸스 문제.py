n, k = map(int, input().split())
nums = list(range(1, n + 1))
ans = []
index = 0

while nums:
    index = (index + k - 1) % len(nums)
    ans.append(str(nums.pop(index)))

print('<', ', '.join(ans), '>', sep='')