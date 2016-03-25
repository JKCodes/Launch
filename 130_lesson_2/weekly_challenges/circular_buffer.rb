class CircularBuffer

  class BufferEmptyException < Exception; end
  class BufferFullException < Exception; end

  def initialize(size)
    clear
    @size = size
  end

  def read
    raise BufferEmptyException if @buffer.empty?
    @buffer.shift
  end

  def write(item)
    return if item.nil?
    raise BufferFullException if full?
    @buffer.push(item)
  end

  def write!(item)
    return if item.nil?
    @buffer.shift if full?
    write(item)
  end

  def clear
    @buffer = []
  end

  private
  
  def full?
    @buffer.size == @size
  end
end