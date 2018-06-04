require 'bundler'

Bundler.require

# require_rel '../app'
require_all 'app'

ActiveRecord::Base.establish_connection({
    adapter: 'sqlite3',
    database: 'db/development.sqlite'
})
