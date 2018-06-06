# ApplicationController
# =====================
#  - Represents the top-level controller for our application
#  - A controller will **inherit** from Sinatra::Base
class ApplicationController < Sinatra::Base

  # Since we are writing a non-standard Sinatra application
  # (a.k.a. we are writing it with folders and a modular pattern),
  # we need to say where the root is and where the app is supposed
  # to find its views.
  set :root, File.join(File.dirname(__FILE__), '..')
  set :views, File.join(root, "views")
  set :method_override, true

  # RESTful Architecture
  # =====================
  # Describes a ***conventional*** set of actions for
  # our applications. It is a way to take our routes
  # and describe what should happen on the database
  # so it will match what CRUD actions are supposed to happen.
  # You will also begin to notice that the actions we
  # want to take will look similar no matter what the
  # resource is.

  get "/" do
    "TAKE ME TO THE /BOOKS ROUTE"
  end
end
