# 1

class Dog
  def speak
    'bark!'
  end

  def swim
    'swimming!'
  end
end

class BullDog < Dog
  def swim
    "can't swim!"
  end
end

# 2

class Animal
  def run
    'running!'
  end

  def jump
    'jumping!'
  end
end

class Dog < Animal
  def speak
    'bark!'
  end

  def swim
    'swimming!'
  end

  def fetch
    'fetching'
  end
end

class Cat < Animal
  def speak
    'meow!'
  end
end

# 3 
         Animal 
      (run, jump)
     /            \
    /              \
 Dog                  Cat
(speak, fetch, swim)  (speak)
  |
 BullDog
 (swim) 

# 4

puts "For BullDog, the ancestors are the following: #{BullDog.ancestors}"