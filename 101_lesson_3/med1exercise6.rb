def rolling_buffer1(buffer, max_buffer_size, new_element)
  buffer << new_element
  buffer.shift if buffer.size >= max_buffer_size
  buffer
end

def rolling_buffer2(input_array, max_buffer_size, new_element)
  buffer = input_array + [new_element]
  buffer.shift if buffer.size >= max_buffer_size
  buffer
end

# yes there is a difference.  The first method will mutate the actual buffer array, where the second one will won't mutate the array.
# In other words, when the first method ends, the passed_in buffer array will also be changed. i.e. new_element will still be added once it returns
# This is different from the second method, for the second method's input_array will not be alted once it returns from the method call.
#
