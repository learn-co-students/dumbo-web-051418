require 'bundler'

Bundler.require

require_rel '../app'

ActiveRecord::Base.establish_connection({
    adapter: 'sqlite3',
    database: 'db/development.sqlite'
})
