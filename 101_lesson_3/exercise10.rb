flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]

flintstones_hash = {}

flintstones.each_with_index do |name, idx|
  puts name
  puts idx
  flintstones_hash[name] = idx
end
