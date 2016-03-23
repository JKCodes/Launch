# 1
# Ben is right.  attr_reader will provide a getter method named balance.
# So, when balance > 0 is called, it is actually using the getter method to retrieve @balance

# 2
# Only attr_reader is set, so when quantity is being set to updated_count, a setter method does not exist yet.
# So, no method error will be shown.
# change quantity to @quantity

# 3
# It is syntatically okay, but doing so will make update_quantity method not very useful,
# for people can now directly set the quantity by doing obj.quantity = 23, completely bypassing the
# update_quantity method.

# 4

class Greeting
  def greet(msg)
    puts msg
  end
end

class Hello < Greeting
  def hi
    greet("Hello")
  end
end

class Goodbye < Greeting
  def bye
    greet("Goodbye")
  end
end

# 5
class KrispyKreme
  def initialize(filling_type, glazing)
    @filling_type = filling_type
    @glazing = glazing
  end

  def to_s
    filling = @filling_type ? @filling_type : 'Plain'
    glaze = @glazing ? "with #{@glazing}" : nil    
    "#{filling} #{glaze}"
  end
end

# 6
# They will return exactly the same thing: "template 14231".  

# 7
# remove 'light_' from self.light_information