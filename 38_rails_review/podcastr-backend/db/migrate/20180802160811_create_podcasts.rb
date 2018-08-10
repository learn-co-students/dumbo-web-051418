class CreatePodcasts < ActiveRecord::Migration[5.2]
  def change
    create_table :podcasts do |t|
      t.string :collectionId
      t.string :collectionViewUrl
      t.string :artworkUrl600
      t.string :collectionName
      t.string :artistName
      t.string :genres, array: true, default: []

      t.timestamps
    end
  end
end
