puts "the value of 40 + 2 is " + (40 + 2)

# The error occurs because (40 + 2) evaluates to an integer value, so the program is trying to add a string value to an integer value.
# one way to fix this is to change (40 + 2) to (40 + 2).to_s
# Another way is to interpolate the value of 40 +2 in the string by doing "the value ... #{40 + 2}"
