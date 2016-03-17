advice = "Few things in life are as important as house training your pet dinosaur."

array = advice.split(' ')
index = array.find_index('important')
array[index] = 'urgent'
advice2 = array.join(' ')
puts advice2

# OR

advice3 = advice.gsub("important", "urgent")
puts advice3
