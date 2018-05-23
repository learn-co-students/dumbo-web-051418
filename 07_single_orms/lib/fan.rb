class Fan

  def self.table_name
    # Return back to me the string for the table name
    self.name.downcase + 's'
  end

  def self.create_table
    sql = "CREATE TABLE IF NOT EXISTS #{self.table_name} (id INTEGER PRIMARY KEY, name TEXT);"

    DB[:conn].execute(sql)
  end

  def self.insert(name)
    # binding.pry
    sql = "INSERT INTO #{self.table_name} (name) VALUES (\"#{name}\")"

    DB[:conn].execute(sql)
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

end
