require 'bundler'

Bundler.require

DB = {
  name: "Music Database",
  conn: SQLite3::Database.new('db/music.db')
}

DB[:conn].results_as_hash = true

require_relative '../lib/fan.rb'
require_relative '../lib/artist.rb'
require_relative '../lib/genre.rb'
require_relative '../lib/album.rb'
