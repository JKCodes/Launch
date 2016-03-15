a = ['white snow', 'winter wonderland', 'melting ice',
     'slippery sidewalk', 'saled roads', 'white trees']

b = a.join(' ').split(' ')

c = a.map { |pairs| pairs.split }
c = c.flatten

p b if b == c
