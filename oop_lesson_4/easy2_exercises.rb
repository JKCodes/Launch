# 1
# It will print "You will " plus one of the three choices randomly.

# 2
# It will print "You will " plus one of the three choices randomly from the RoadTrip class

# 3
# Use object.ancestors

# 4

class BeesWax
  attr_accessor :type

  def initialize(type)
    @type = type
  end

  def describe_type
    puts "I am a #{type} of Bees Wax"
  end
end

# 5
# if there are no @, then it is a local variable.  One @ means instance variable, and two @ means class variable

# 6
# Class methods have the syntax self.method_name

# 7
# @@cats_count will increment when initalize method has been called.  In other words, it will increament when a new Cat
# instance has been created.  In order to test this, we can create three Cat instances, and then run Cat.cats_count.
# It will return 3.

# 8

class Bingo < Game
  def rules_of_play
  end
end

# 9
# It will then overwrite the Game's play and will execute Bingo's play instead.

# 10
# 1 Allows programmers to think abstractly about the code they are creating
# 2 Hide the details of the code and expose only the functionality
# 3 Becase of #2, programer 'A' doesn't even have to know how certain method is created,
#   All he/she cares is that it works.  
# 4 Allows further reducement of code duplication
