def sequence_check(string)
  if /lab/ =~ string
    puts string
  else
    puts "Does not match"
  end
end

sequence_check("laboratory")
sequence_check("experiment")
sequence_check("Pans Labyrinth")
sequence_check("elaborate")
sequence_check("polar bear")
