class MyCar
  attr_accessor :color
  attr_reader   :year

  def initialize(year, color, model)
    @year = year
    @color = color
    @model = model
    @current_speed = 0
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

  def self.gas_mileage(gals, miles)
    puts "#{miles / gal} mpg"
  end

  def to_s
    "The car is a #{year}, #{model}, #{color}!"
  end
end


# number 3
# change the attr_reader to attr_accessor