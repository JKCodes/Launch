def each(array)
  counter = 0
  
  while counter < array.length
    yield(array[counter])
    counter += 1
  end  
  array
end

array = [1, 2, 3, 4, 5]
hi = each(array) do |num|
  puts num * 2
end
p hi