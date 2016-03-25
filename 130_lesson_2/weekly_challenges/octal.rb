require 'pry'
class Octal

  VALID_NUM = '01234567'

  def initialize(num)
    @num =  num.to_i.to_s.split('').reverse
    @num = ['0'] unless valid_number?(@num)
  end

  def to_decimal()
    sum = 0
    @num.each.with_index { |place, idx| sum += place.to_i * 8 ** idx }
    sum
  end

  private

  def valid_number?(num)
    num.join.delete(VALID_NUM) == ''
  end
end
