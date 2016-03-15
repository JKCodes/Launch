array = [1, 2, 4, 7, 11, 16, 22]
new_array = []

array.each_index do |i|
  new_array[i] = array[i] + 2
end

p array
p new_array
