def times(number, &block)
  counter = 0
  loop do
    yield(counter)
    counter += 1
    break if counter == number
  end

  number
end

times(5) do |num|
  puts num
end