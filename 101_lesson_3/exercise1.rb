numbers = [1, 2, 2, 3]
numbers.uniq

puts numbers

#  This will output 1 2 2 3.  The reason why 1 2 3 would not be displayed is that the uniq method would not mutate the array.
#  However, if it was numbers.uniq! instead, then 1 2 3 would be displayed.  
#  In addtion if p numbers was used, [1, 2, 2, 3] would have been displayed.

