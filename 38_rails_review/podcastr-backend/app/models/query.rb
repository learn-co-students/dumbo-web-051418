class Query
  attr_writer :response
  attr_accessor :term

  def initialize(term:)
    @term = term
  end

  def url
    "https://itunes.apple.com/search?term=#{self.formatted_term}&entity=podcast"
  end

  def formatted_term
    self.term.gsub(" ", "+").gsub(/\W/,"")
  end

  def fetch_data
    self.response = HTTParty.get(self.url)
  end

  def response
    @response || self.fetch_data
  end

  def json
    JSON.parse(self.response.body)
  end

  def results #returns array of media
    self.json["results"]
  end

end
