munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

def mess_with_demographics(demo_hash)
  demo_hash.values.each do |family_member|
    family_member["age"] += 42
    family_member["gender"] = "other"
  end
end

mess_with_demographics(munsters)

# The family's data did get ransacked in this case. Even though the method uses a variable of different name (demo_hash), the object id of munsters is passed.
# When Spot made changes to the demo_hash, it ends up modifying munsters, for demo_hash is pointing to munsters right now.  
# As long as demo_hash points to munsters, munsters will be changed when demo_hash is changed.  
