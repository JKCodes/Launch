module Towable
  def can_tow?(pounds)
    pounds < 2000 ? true : false
  end
end

class Vehicle
  attr_accessor :color
  attr_reader   :year
  attr_reader   :model
  
  @@num_vehicles = 0

  def initialize(year, color, model)
    @year = year
    @color = color
    @model = model
    @current_speed = 0
    @@num_vehicles += 1
  end

  def speed_up(number)
    @current_speed += number
    puts "You increase the speed by #{number} mph."
  end

  def break
    @current_speed -= number
    puts "You decrease the speed by #{number} mph."
  end

  def shut_off
    @current_speed = 0
    puts "You turned the car off"
  end

  def current_speed
    puts "Your current speed is #{current_speed} mph."
  end

  def spray_paint(color)
    self.color = color
    puts "You changed the car color to #{self.color}"
  end

  def self.num_vehicles
    puts "This program has created #{@@num_vehicles} vehicles"
  end

  def age
    puts "The vehicle is #{years_old} years old."
  end

  private

  def years_old
    Time.now.year.to_i - self.year.to_i
  end
end


class MyTruck < Vehicle
  include Towable
  NUM_DOORS = 2
  def to_s
    "The truck is a #{year}, #{model}, #{color}!"
  end
end

class MyCar < Vehicle
  NUM_DOORS = 4
  def to_s
    "The car is a #{year}, #{model}, #{color}!"
  end
end

car = MyCar.new('2010', 'a', 'b')
truck = MyTruck.new('2009', 'b', 'd')

# puts Vehicle.num_vehicles
# puts car
# puts truck
# puts Vehicle.ancestors
# puts MyCar.ancestors
# puts MyTruck.ancestors
# puts truck.can_tow?(4000)
# puts car.age
# puts truck.age



class Student
  attr_reader :name
  def initialize(name, grade)
    @name = name
    @grade = grade
  end

  def better_grade_than?(person)
    person.grade < grade
  end

  protected

  def grade
    @grade
  end
end

joe = Student.new("joe", 63)
bob = Student.new("bob", 33)
puts "Well done!" if joe.better_grade_than?(bob)

# 8 
# Either move that method into public area or create a method in Person class that access that private method
