def reduce(arry, start_val = 0)
  counter = 0
  sum = start_val

  while counter < arry.size
    sum = yield(sum, arry[counter])
    counter += 1
  end
  sum
end



array = [1, 2, 3, 4, 5]

reduce(array) { |acc, num| acc + num }              # => 15
reduce(array, 10) { |acc, num| acc + num }          # => 25
reduce(array) { |acc, num| acc + num if num.odd? }  # => NoMethodError