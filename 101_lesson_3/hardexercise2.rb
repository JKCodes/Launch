greetings = { a: 'hi' }
informal_greeting = greetings[:a]
informal_greeting << ' there'

puts informal_greeting  #  => "hi there"
puts greetings

# will display { a: 'hi there'}
# The reason is that << operator actually modified the original greeting instead of reassigning the changed value
# Thus, the greetings has been changed when informal_greeting << ' there' was run.
