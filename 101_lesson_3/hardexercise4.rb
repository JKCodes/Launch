def generate_uuid
  choices = []
  (0..9).each { |number| choices << number.to_s }
  ('a'..'f').each { |letter| choices << letter }

  code = ''
  36.times do |idx|
    if idx == 8 || idx == 13 || idx == 18 || idx == 23
      code << '-'
    else
      code << choices.sample
    end
  end
  code
end

puts generate_uuid
