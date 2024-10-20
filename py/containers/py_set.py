s = set()

# Add an element to the set
s.add(1)

# Remove an element from the set
s.remove(1)

# Check if an element is in the set
if 1 in s:
    print("1 is in the set")
else:
    print("1 is not in the set")

# Get the number of elements in the set
print(len(s))

# Clear the set
s.clear()

# Convert a list to a set
s = set([2, 1, 3])

# Convert a set to a list
l = list(s)

# Iterate over the set
for e in s:
    print(e)

# Iterate over the set with an index
for i, e in enumerate(s):
    print(i, e)

# Iterate over the set where the elements are sorted
for e in sorted(s):
    print(e)
