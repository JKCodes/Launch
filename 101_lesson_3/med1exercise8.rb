def titleize(string)
  array = string.split.map { |word| word.capitalize! }.join(' ')
end


new_title = titleize("hello my name is not important to you.")
puts new_title
