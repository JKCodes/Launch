require 'pry'
class Luhn

  def initialize(num)
    @num = num.to_s.split('').map(&:to_i)
  end

  def addends
    @num.reverse.map.with_index do |num, idx|
      if idx.odd?
        num * 2 > 10 ? num * 2 - 9 : num * 2
      else  
        num
      end
    end.reverse
  end

  def checksum
    addends.reduce(:+)
  end

  def valid?
    checksum % 10 == 0
  end

  def self.create(num)
    created_val = Luhn.new(num * 10)
    created_val.valid? ? num * 10 : 10 * num - created_val.checksum % 10 + 10
  end
end