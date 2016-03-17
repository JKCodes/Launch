INITIAL_MARKER = ' '.freeze
PLAYER_MARKER = 'X'.freeze
COMPUTER_MARKER = 'O'.freeze
WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] +
                [[1, 4, 7], [2, 5, 8], [3, 6, 9]] +
                [[1, 5, 9], [3, 5, 7]].freeze
def prompt(msg)
  puts "=> #{msg}"
end

def display_board(brd, player_wins, computer_wins, game)
  system 'clear'
  puts "First player to five points wins the game!"
  puts "Player will go first on odd numbered games."
  puts "Computer will go first on even numbered games."
  puts ""
  puts "Game ##{game}"
  puts "Current Score"
  puts "  Player:   #{player_wins}"
  puts "  Computer: #{computer_wins}"
  puts "  Tie:      #{game - player_wins - computer_wins -1}"
  puts ""
  puts "You are #{PLAYER_MARKER}.  Computer is #{COMPUTER_MARKER}."
  puts ""
  puts "     |     |"
  puts "  #{brd[1]}  |  #{brd[2]}  |  #{brd[3]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{brd[4]}  |  #{brd[5]}  |  #{brd[6]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{brd[7]}  |  #{brd[8]}  |  #{brd[9]}"
  puts "     |     |"
  puts ""
end

def initialize_board
  new_board = {}
  (1..9).each { |num| new_board[num] = INITIAL_MARKER }
  new_board
end

def empty_squares(brd)
  brd.keys.select { |num| brd[num] == INITIAL_MARKER }
end

def player_places_piece!(brd)
  square = ''
  loop do
    prompt "Choose a square (#{joinor(empty_squares(brd))}):"
    square = gets.chomp.to_i
    break if empty_squares(brd).include?(square)
    prompt "Sorry, that's not a valid choice."
  end
  brd[square] = PLAYER_MARKER
end

def computer_places_piece!(brd)
  square = nil
  
  # offense first
  WINNING_LINES.each do |line|
    square = find_at_risk_square(line, brd, COMPUTER_MARKER)
    break if square
  end

  # defense next
  if !square
    WINNING_LINES.each do |line|
      square = find_at_risk_square(line, brd, PLAYER_MARKER)
      break if square
    end
  end

  # pick square 5 next, if available
  square = 5 if !square && empty_squares(brd).include?(5)

  # just pick a random square
  square = empty_squares(brd).sample if !square

  brd[square] = COMPUTER_MARKER
end

def board_full?(brd)
  empty_squares(brd).empty?
end

def someone_won?(brd)
  !!detect_winner(brd)
end

def detect_winner(brd)
  WINNING_LINES.each do |line|
    if brd.values_at(*line).count(PLAYER_MARKER) == 3
      return 'Player'
    elsif brd.values_at(*line).count(COMPUTER_MARKER) == 3
      return 'Computer'
    end
  end
  nil
end

def joinor(array, delimiter = ', ', word = 'or')
  array[-1] = "#{word} #{array.last}" if array.size > 1
  array.join(delimiter)
end

def find_at_risk_square(line, brd, marker)
  if brd.values_at(*line).count(marker) == 2
    brd.select{ |k, v| line.include?(k) && v == INITIAL_MARKER}.keys.first
  else
    nil
  end
end

def place_piece!(brd, current_player)
  if current_player == 'Player'
    player_places_piece!(brd)
  else
    computer_places_piece!(brd)
  end
end

def alternate_player(current_player)
  return 'Computer' if current_player == 'Player'
  'Player'
end

def alternate_first_move_player(game)
  return 'Computer' if game % 2 == 0
  'Player'
end

current_player = 'Player'

loop do
  player_score = 0
  computer_score = 0
  round = 1
  winner = ''
  loop do
    board = initialize_board
    loop do
      display_board(board, player_score, computer_score, round)
      place_piece!(board, current_player)
      current_player = alternate_player(current_player)
      break if someone_won?(board) || board_full?(board)
    end

    display_board(board, player_score, computer_score, round)
    winner = detect_winner(board)

    if winner == "Player"
      player_score += 1
      prompt "Player won round #{round}!"
    elsif winner == "Computer"
      computer_score += 1
      prompt "Computer won round #{round}!"
    else
      prompt "Round #{round} resulted in a tie!"
    end
    
    break if player_score == 5 || computer_score == 5

    prompt "Press enter to start round #{round+1}"
    gets.chomp

    round += 1
    current_player = alternate_first_move_player(round)
  end
  prompt "#{winner} wins the game with 5 points!" 
  prompt "Play again? (y or n)"
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt "Thanks for playing Tic Tac Toe! Good Bye!"
