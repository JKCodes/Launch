require 'pry'

GAME_SETTINGS = { max_points: 21, dealer_stop: 17 }.freeze

def prompt(msg)
  puts "=> #{msg}"
end

def create_deck
  deck = []
  4.times do |suit|
    name = case suit
           when 0
             'Spades'
           when 1
             'Hearts'
           when 2
             'Clubs'
           else
             'Diamonds'
           end

    13.times do |value|
      case value
      when 1..9
        deck << [value + 1, name]
      when 0
        deck << ["Ace", name]
      when 10
        deck << ["Jack", name]
      when 11
        deck << ["Queen", name]
      else
        deck << ["King", name]
      end
    end
  end
  deck
end

def sum_hand(hand)
  values = hand.map { |card| card[0] }

  sum = 0
  values.each do |value|
    if value == 'Ace'
      sum += 11
    elsif value.to_i == 0
      sum += 10
    else
      sum += value
    end
  end

  values.count('Ace').times do
    sum -= 10 if sum > GAME_SETTINGS[:max_points]
  end

  sum
end

def display_table(player_cards, dealer_cards, hidden = true)
  system 'clear'
  puts "Dealer has the following:"
  if hidden
    puts "1) #{dealer_cards[0][0]} of #{dealer_cards[0][1]}"
    puts "2) Unknown card"
  else
    show_cards(dealer_cards)
  end
  puts "--------------------"
  puts "You have the following:"
  show_cards(player_cards)
end

def show_cards(cards)
  cards.each_with_index do |card, idx|
    puts "#{idx + 1}) #{card[0]} of #{card[1]}"
  end
  puts "Sum of cards: #{sum_hand(cards)}"
  puts ""
end

def display_options
  option = ''
  loop do
    prompt "Choose one of the following:"
    prompt "1) Hit"
    prompt "2) Stay"
    option = gets.chomp.to_i
    break if option == 1 || option == 2
    prompt "Sorry, you must choose either 1 or 2"
  end
  option
end

def add_card(deck, cards)
  cards << deck.delete(deck.sample) if !deck.empty?
end

def busted?(player_cards)
  sum_hand(player_cards) > GAME_SETTINGS[:max_points]
end

def winning_player(pcards, dcards)
  if sum_hand(pcards) > sum_hand(dcards)
    'Player'
  elsif sum_hand(dcards) > GAME_SETTINGS[:max_points]
    'Bust'
  elsif sum_hand(dcards) > sum_hand(pcards)
    'Dealer'
  else
    'Tie'
  end
end

def display_results(player_cards, dealer_cards)
  result = winning_player(player_cards, dealer_cards)
  display_table(player_cards, dealer_cards, false)
  if result == 'Bust'
    prompt("You win! Dealer busted with the score of #{sum_hand(dealer_cards)}!")
  elsif result == 'Player'
    prompt("You wins with the score of #{sum_hand(player_cards)} - #{sum_hand(dealer_cards)}")
  elsif result == 'Dealer'
    prompt("Dealer wins with the score of #{sum_hand(dealer_cards)} - #{sum_hand(player_cards)}")
  else
    prompt("It's a tie!")
  end
end

def simulate_dealer(deck, dealer_hand)
  return if sum_hand(dealer_hand) >= GAME_SETTINGS[:dealer_stop]

  loop do
    add_card(deck, dealer_hand)
    return if sum_hand(dealer_hand) >= GAME_SETTINGS[:dealer_stop]
  end
end

loop do
  card_pile = create_deck
  player_hand = []
  computer_hand = []
  2.times { add_card(card_pile, player_hand) }
  2.times { add_card(card_pile, computer_hand) }

  loop do
    display_table(player_hand, computer_hand)
    choice = display_options
    add_card(card_pile, player_hand) if choice == 1
    break if busted?(player_hand) || choice == 2
  end

  if busted?(player_hand)
    display_table(player_hand, computer_hand, false)
    prompt("Dealer wins! You busted with the score of #{sum_hand(player_hand)}!")
  else
    simulate_dealer(card_pile, computer_hand)
    display_results(player_hand, computer_hand)
  end

  prompt("")
  prompt("Play again (y or n)?")
  answer = gets.chomp.to_s
  break unless answer.start_with?('y')
end

prompt("Thank you for playing Twenty-one!  Good bye!")
