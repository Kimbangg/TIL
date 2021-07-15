import heapq

heap = []
heapq.heappush(heap,50)
heapq.heappush(heap,10)
heapq.heappush(heap,20)

print(heap)

heap2 = [50 ,10, 20]
heapq.heapify(heap2)

print(heap2)