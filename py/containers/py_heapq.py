# Heap is an useful data structure to maintain the minimum or maximum element in the list.
import heapq

# The underlying list
ls = [3, 5, 1, 4, 2]

# Heapify the list, in-place
heapq.heapify(ls)

while len(ls) > 0:
    # Get the smallest element
    val = heapq.heappop(ls)
    print(val)


# To store customized object, use tuple with index keys, or implement __lt__ method for the class
class Node:
    def __init__(self, val):
        self.val = val

    def __lt__(self, other: "Node"):
        return self.val > other.val  # This makes the heap a max-heap

    def __repr__(self):
        return self.val


ls = [Node(3), Node(5), Node(1), Node(4), Node(2)]

heapq.heapify(ls)

while len(ls) > 0:
    val = heapq.heappop(ls)
    print(val.val)

# By default, heapq is a min-heap. To make it a max-heap, negate the values
ls = [3, 5, 1, 4, 2]
ls = [-x for x in ls]
heapq.heapify(ls)

while len(ls) > 0:
    val = heapq.heappop(ls)
    print(-val)
