require 'rack'
require_relative './app'


controller_instance = App.new
run(controller_instance)
