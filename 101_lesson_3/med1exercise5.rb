def factors(number)
  dividend = number
  divisors = []
  return if number < 1
  while dividend > 0 do
    divisors << number / dividend if number % dividend == 0
    dividend -= 1
  end
  divisors
end

# number % dividend will see if there is a remainder when the provided number is divided by current number called dividend.
# if there is no remainder, it means that the current number is a factor.
#
# The second to last line 'divisors' sets the return value of the method to the divisors array
# Otherwise, nil would be returned
