numbers = [1, 2, 3, 4, 5]
numbers2 = [1, 2, 3, 4, 5]

numbers.delete_at(1)
numbers2.delete(1)

p numbers
p numbers2

# First of all, they are both mutating methods.  The first one delete whatever is at the given index.  
# The second one on the otherhand deletes all occurrance of the specified value from the entire array. 
