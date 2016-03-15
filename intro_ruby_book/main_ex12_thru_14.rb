contact_data = [["joe@email.com", "123 Main st.", "555-123-4567"],
                ["sally@email.com", "404 Not Found Dr.", "123-234-3454"]]
contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}

contacts["Joe Smith"] = contact_data[0]
contacts["Sally Johnson"] = contact_data[1]

puts "Joe's email address is: #{contacts["Joe Smith"][0]}"
puts "Sally's phone number is: #{contacts["Sally Johnson"][2]}"

# start of #14

contact_data2 = ["joe@email.com", "123 Main st.", "555-123-4567"]
contacts2 = {"Joe Smith" => {}}
fields = [:email, :address, :phone]

contacts2.each do |name, hash|
  fields.each do |field|
    hash[field] = contact_data2.shift
  end
end

puts contacts2
