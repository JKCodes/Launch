answer = 42

def mess_with_it(some_number)
  some_number += 8
end

new_answer = mess_with_it(answer)

p answer - 8

# 34 will be displayed.  the changes made in the method is saved to a new variable, so answer will not be changed at all.
# So p answer - 8 will be p 42 -8 or p 34.
