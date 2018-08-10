class Podcast < ApplicationRecord
  has_many :favorites
  has_many :users, through: :favorites

  attr_writer :response
  attr_writer :parsed_page

  after_save :fetch_data

  def fetch_data
    self.response = HTTParty.get(self.collectionViewUrl)
  end

  def response
    @response || self.fetch_data
  end

  def json
    JSON.parse(self.response.body)
  end

  def parsed_page
    @parsed_page || self.parsed_page = Nokogiri::HTML(self.response)
  end

  def rating
    self.parsed_page.css('[itemprop=ratingValue]').inner_text.to_f
  end

  def episodes
    self.parsed_page.css('div.tracklist-content-box tr.podcast-episode')[0...15].map do |episode|
      {
        name: episode.css("td.name span.text").text,
        description: episode.css("td.description span.text").text,
        release_date: episode.css("td.release-date span.text").text,
        duration: episode.attributes["preview-duration"].value.to_i
      }
    end
  end

  def formatted
    {
      id: self.id,
      collectionViewUrl: self.collectionViewUrl,
      artworkUrl600: self.artworkUrl600,
      collectionName: self.collectionName,
      artistName: self.artistName,
      genres: self.genres,
      rating: self.rating,
      episodes: self.episodes
    }
  end

end
