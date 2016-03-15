array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

new_array = array.select {|num|  num % 2 == 1 }
puts new_array
