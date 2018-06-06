class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.string :name
    end

    remove_column :books, :author, :string
    add_column :books, :author_id, :integer
  end
end
