# 1 
# They are all objects.. and I can find out their classes by calling .class method on the objects.

# 2
# include Speed on both Car and Truck classes

class Car
  include Speed
end

# 3
# String interporation automatically uses .to_s method on the object.  
# In addion, self, in this case, refers to the class, so when .class is called, 
# the is returned.

# 4
AngryCat.new

# 5
# Instance variables have the @ symbol before the variable name.

# 6
# There are several ways to achieve this, but one way is to use attr_accessor, 
# attr_reader, or attr_writer, depending on the need.

# 7
# When to_s is called on an object, the default behavior is to print out information about the object,
# such as object id and encoding.

# 8
# In this case, self refers to the instance of the Cat class that called the method.

# 9
# In this case, self refers to the Cat class

# 10
Bag.new('blue', 'cotton')