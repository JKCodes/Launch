numbers = [1, 2, 3, 4]
numbers.each do |number|
  p number
  numbers.shift(1)
end

# this will display 1 the first time, but shift will remove '2' from the array. So the next time, 3 will be display. 
# 4 will never be display because it will be removed by the shift method during the second iteration

numbers = [1, 2, 3, 4]
numbers.each do |number|
  p number
  numbers.pop(1)
end

# This will display 1 during the first iteration and 2 during the second iteration.  There will be no third iteration, for the first iteration will remove 4, 
# and the second iteration will remove 3.

