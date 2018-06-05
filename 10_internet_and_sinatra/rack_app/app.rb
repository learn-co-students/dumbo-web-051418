require 'pry'

class App
  def call(environment_hash)

    # binding.pry
    # Status
    # Headers
    # Body

    # Index Route
    # Root Route
    if environment_hash["REQUEST_PATH"] == "/"
      status_code = 200
      headers = {}
      body = ["Hello, Prince!"]

      [status_code, headers, body]
    end

    # response = Rack::Response.new
    #
    # response.write("Hello, World")
    #
    # response.finish
  end
end
