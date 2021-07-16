import collections 

card_num = int(input())
card_deque = collections.deque([i for i in range(1, card_num+1)])

while len(card_deque) != 1 :
  card_deque.popleft()
  card_deque.rotate(-1)

print(card_deque[0])