def solution(stick) :
 answer = 0
 stack = []
 
 for i in range(len(stick)):
   if stick[i] == '(' :
     stack.append('(')
   else :
     if stick[i-1] == '(':
       stack.pop()
       answer += len(stack)
     else :
       stack.pop()
       answer += 1
 return answer

stick = list(input())
print(solution(stick))
