def tricky_method_two(a_string_param, an_array_param)
  a_string_param.gsub!('pumpkins', 'rutabaga')
  an_array_param = ['pumpkins', 'rutabaga']
end

my_string = "pumpkins"
my_array = ["pumpkins"]
tricky_method_two(my_string, my_array)

puts "My string looks like this now: #{my_string}"
puts "My array looks like this now: #{my_array}"

# This time, the array will display just ["pumpkins"]
# The string will substitue rutabaga for pumpkins and will now display rutabaga.
# gsub! just modified the existing string instead of reassigning the operation to a new variable
