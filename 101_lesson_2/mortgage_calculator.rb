def prompt(message)
  puts(">> #{message}")
end

def valid_number?(input)
  input != 0 && input.to_f > 0
end

def do_loop(message)
  loop do
    prompt(message)
    variable = gets.chomp
    return variable.to_f if valid_number?(variable)
    prompt("#{variable} is not a valid number. The input must be a positive number")
  end
end

prompt("Welcome to Mortgage / Car loan Calculator!")

loop do
  prompt("--------------------")
  amount = do_loop("What is the loan amount").to_f
  apr = do_loop("What is the Annual Percentage Rate (APR)?  If the rate is 6%, please enter as 6 and not 0.06 or 6%").to_f
  duration = do_loop("What is the loan duration in months?").to_i

  monthly_rate = apr / 1200
  monthly_payment = amount * (monthly_rate * (1 + monthly_rate)**duration) /
                    ((1 + monthly_rate)**duration - 1)

  prompt("Your monthly rate is #{format('%02.5f', monthly_rate)}%")
  prompt("Your monthly payment is $#{format('%02.2f', monthly_payment)}")

  prompt("Would you like to compute again (Y to compute again)?")
  again = gets.chomp.downcase
  break unless again == 'y'
end

prompt("Thank you for using this calculater.  Good bye!")
