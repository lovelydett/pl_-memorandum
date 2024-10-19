# Examine the copy behavior of Python
import copy

# 1. A list of basic data types
arr = [1, 2, 3, 4, 5]

# 1.1 Shallow copy: creates a new OBJECT, but not new elements, however, the elements are immutable for basic data types
arr_copy1 = arr.copy()
arr_copy2 = arr[:]
arr_copy3 = copy.copy(arr)

print(arr_copy1 is arr)  # False
print(arr_copy2 is arr)  # False
print(arr_copy3 is arr)  # False

arr_copy1[0] = 100
arr_copy2[1] = 200
arr_copy3[2] = 300
print(arr)  # [1, 2, 3, 4, 5]


# 2. A list of objects
class Person:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"Person({self.name})"
    
