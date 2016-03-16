VALID_CHOICES = %w(rock paper scissors lizard spock)
VALID_LETTERS = %w(r p c l s)

def prompt(message)
  puts "=> #{message}"
end

def win?(first, second)
  (first == 'rock' && second == 'scissors') ||
    (first == 'paper' && second == 'rock') ||
    (first == 'scissors' && second == 'paper') ||
    (first == 'rock' && second == 'lizard') ||
    (first == 'lizard' && second == 'spock') ||
    (first == 'spock' && second == 'scissors') ||
    (first == 'scissors' && second == 'lizard') ||
    (first == 'lizard' && second == 'paper') ||
    (first == 'paper' && second == 'spock') ||
    (first == 'spock' && second == 'rock')
end

def compute_winner(player, computer)
  if win?(player, computer)
    'player'
  elsif win?(computer, player)
    'computer'
  else
    "tie"
  end
end

prompt("Welcome to RPSLS!")
prompt("Each win will grant you one point!")
prompt("First player to reach five points wins the game!")

loop do
  player_score = 0
  computer_score = 0
  round = 1
  choice = ''
  options_prompt = <<-OPTION
    Choose one: #{VALID_CHOICES.join(', ')}
    You may also just type in the first letter of each word instead.
    However, for scissors, input 'c' instead.
    Entering 's' will automatically choose spock.
  OPTION

  loop do
    scores = <<-SCORE
      Round: #{round}
      Current score:
      Player - #{player_score}
      Computer - #{computer_score}
      Tie - #{round - player_score - computer_score - 1}
    SCORE

    prompt("----------------------------------")
    prompt(scores)

    loop do
      prompt(options_prompt)
      choice = gets.chomp
      break if VALID_CHOICES.include?(choice) || VALID_LETTERS.include?(choice)
      prompt("That's not a valid choice.")
    end

    choice = VALID_CHOICES[VALID_LETTERS.find_index(choice)] if choice.length == 1
    computer_choice = VALID_CHOICES.sample

    prompt("You chose: #{choice}; Computer chose: #{computer_choice}")

    winner = compute_winner(choice, computer_choice)

    if winner == 'player'
      player_score += 1
      prompt("You win round #{round}!")
    elsif winner == 'computer'
      computer_score += 1
      prompt("Computer wins round #{round}!")
    else
      prompt("It's a tie this round!")
    end

    round += 1
    break if player_score == 5 || computer_score == 5
  end

  if player_score == 5
    prompt("You win the game: 5 - #{computer_score}")
  else
    prompt("Computer wins the game: 5 - #{player_score}")
  end

  prompt("Do you want to play again?")
  answer = gets.chomp
  break unless answer.downcase().start_with?('y')
end

prompt("Thanks for playing!  Good bye!")
