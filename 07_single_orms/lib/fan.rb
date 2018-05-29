# * Public Methods
#   ---* `#initialize(attrs)` # Genre.new(attributes)
#   * `#save`
#   * `#update(attrs)`
#   * `#delete`
#   * `.create(attrs)` # Genre.create(attributes)
#   * `.all`
#   * `.delete(id)`
#   * `.find(id)`
#   * `.find_by(attrs)`
# * Helper Methods
#   * `.new_from_row(row)`
#   * `.conditions_from_hash(attrs)`
# * Private Methods
#   ---* `#mass_assign_attributes(attrs)`
#   * `#insert_record`
#   * `#update_record`
#   * `#delete_record`



class Fan

  attr_accessor :id, :name

  Fan.new("Prince")

  def initialize(name)
    @name = name
  end

  def initialize(attributes)
    # prince = Fan.new({"id" => 1, "name"=> "Prince"})
    # prince.id = 1
    # prince.name = "Prince"

    # @id = attributes["id"]
    # @name = attributes["name"]

    mass_assign_attributes(attributes)

  end


  def self.table_name
    # Return back to me the string for the table name
    self.name.downcase + 's'
  end

  def self.create_table
    sql = "CREATE TABLE IF NOT EXISTS #{self.table_name} (id INTEGER PRIMARY KEY, name TEXT);"

    DB[:conn].execute(sql)
  end

  def save
    self.id.nil? ? self.insert_record : self.update_record
  end

  def self.create(attributes)
    # binding.pry

    found_data = DB[:conn].execute("SELECT * FROM fans ORDER BY id DESC LIMIT 1")

    Fan.new(found_data[0])
  end

  def self.find_by_name(name)
    sql = "SELECT * FROM #{self.table_name} WHERE name IS \"#{name}\""

    DB[:conn].execute(sql)
  end

  def self.update(id, new_name)
    sql = "UPDATE #{self.table_name} SET name = \"#{new_name}\" WHERE id = #{id}"

    DB[:conn].execute(sql)
  end

  def self.delete(id)
    sql = "DELETE FROM #{self.table_name} WHERE id = #{id}"

    DB[:conn].execute(sql)
  end

  private
  def mass_assign_attributes(attributes)
    attributes.each do |key, value|
      if self.respond_to?("#{key}=")
        # prince.name= value
        # prince.id= value
        #
        # self.key= value
        self.send("#{key}=", value)
      end
    end
  end

  def insert_record
    sql = "INSERT INTO #{self.table_name} (name) VALUES (?)"

    DB[:conn].execute(sql, self.name)
    @id = 
  end

end
