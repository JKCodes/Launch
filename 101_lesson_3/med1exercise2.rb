statement = "The Flintstones Rock"
results = {}
statement.split('').each do |letter|
  if results[letter]
    results[letter] += 1
  else
    results[letter] = 1
  end
end

result = {}
letters = ('A'..'Z').to_a + ('a'..'z').to_a
letters.each do |letter|
    letter_frequency = statement.scan(letter).count
      result[letter] = letter_frequency if letter_frequency > 0
end
