def select(array)
  counter = 0
  new_array = []

  while counter < array.length
    new_array << array[counter] if yield(array[counter])
    counter += 1
  end
  new_array
end



array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
hi = select(array) do |num|
  num > 4
end
p hi