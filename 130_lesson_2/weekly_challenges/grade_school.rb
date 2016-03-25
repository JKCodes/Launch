
class School

  def initialize
    @students = {}
  end

  def add(name, grade)
    if @students[grade]
      @students[grade] << name
    else
      @students[grade] = [name]
    end
  end

  def to_h
    returned_hash = {}
    @students.keys.sort.each do |key|
      returned_hash[key] = @students[key].sort
    end
    returned_hash
  end

  def grade(student_grade)
    return [] unless @students[student_grade]
    @students[student_grade]
  end
end