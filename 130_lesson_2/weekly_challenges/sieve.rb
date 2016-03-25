class Sieve

  def initialize(num)
    @num = num
    @primes = []
  end
  
  def primes
    (2..@num).each { |current| @primes << current if is_prime?(current, @primes) }
    @primes
  end

  private 

  def is_prime?(num, current_primes)
    current_primes.each { |prime| return false if num % prime == 0 }
    true
  end
end