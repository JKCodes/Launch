array = ['snow', 'winter', 'ice', 'slippery', 'salted roads', 'white trees']

array.delete_if { |word| word.start_with?('s') }

p array

array = ['snow', 'winter', 'ice', 'slippery', 'salted roads', 'white trees']

array.delete_if { |word| word.start_with?('s', 'w') }

p array
