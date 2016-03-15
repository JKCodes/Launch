def evaluate_num(num)
  case
  when num < 0 
    "num can't be negative"
  when num <=50
    "#{num} is between 0 and 50"
  when num <= 100
    "#{num} is between 51 and 100"
  else
    "#{num} is above 100"
  end
end

puts "Enter a number between 0 and 100"
number = gets.chomp.to_i

puts evaluate_num(number)
