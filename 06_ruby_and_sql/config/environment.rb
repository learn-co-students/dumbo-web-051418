require 'bundler'

Bundler.require

DB = {
  conn: SQLite3::Database.new('db/chinook.db')
}

DB[:conn].results_as_hash = true

require_relative '../lib/artist.rb'
require_relative '../lib/genre.rb'
require_relative '../lib/album.rb'
