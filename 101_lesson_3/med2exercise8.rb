def foo(param = "no")
  "yes"
end

def bar(param = "no")
  param == "no" ? "yes" : "no"
end

bar(foo)

# First, foo will return "yes" because that's the only option.
# Second, bar("yes") will return "no", because "yes" == "no is false.
# Thus, "no" will be outputted.
