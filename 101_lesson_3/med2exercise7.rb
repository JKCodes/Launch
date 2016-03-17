def rps(fist1, fist2)
  if fist1 == "rock"
    (fist2 == "paper") ? "paper" : "rock"
  elsif fist1 == "paper"
    (fist2 == "scissors") ? "scissors" : "paper"
  else
    (fist2 == "rock") ? "rock" : "scissors"
  end
end

puts rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")

# This will produce 'paper'.  Taking this step by step
# 1)  rps(rps("paper", rps("rock", "scissors")), "rock")
# 2)  rps(rps("paper", "rock"), "rock")
# 3)  rps("paper", "rock")
# 4)  "paper"

