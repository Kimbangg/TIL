def solution(time):

  if time.length == 1 :
    return time[0]
  
  time.sort()
  sum = time[0]

  for i in range(1, n):
    time[i] += time[i-1]
    sum += time[i]

  return sum

n = int(input())
wt = list(map(int, input().split()))
print(solution(wating_time))