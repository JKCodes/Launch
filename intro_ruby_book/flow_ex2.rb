def convert(input)
  if input.length > 10
    input.upcase
  else
    input
  end

end

puts convert("hello world")
