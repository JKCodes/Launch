# 1
# case 1 will output "Hello".  Case 2 will throw a no method error
# case 3 will throw wrong number of argument error.
# case 4 will output "Goodbye"
# case 5 will throw no method error.  only instances can call that method.

# 2

def self.hi
  greetings = Greeting.new
  greetings.greet("Hello")
end

# 3
obj1 = AngryCat.new('a', 'b')
obj2 = AngryCat.new('c', 'd')

# 4
def to_s
  "I am a #{@type} cat" # or create attr_reader and do #{type} instead
end

# 5
# Television.manufacturer will execute, but Television.model will throw no method error
# tv.manufacturere will throw no method error, but tv.model will execute

# 6
# use @age instead of self.age

# 7
# 'return' is not necessary, for a method will automatically return the last evaluated statement