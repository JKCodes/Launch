hash = {key1: 'val1', key2: 'val2', key3: 'val3', key4: 'val4'}

hash.each do |k, v|
  puts k
end

hash.each do |k, v|
  puts v
end

hash.each do |k, v|
  puts "#{k}: #{v}"
end
