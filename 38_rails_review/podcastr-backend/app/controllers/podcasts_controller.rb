class PodcastsController < ApplicationController
  def create
    @podcast = Podcast.find_or_initialize_by(podcast_params)

    if @podcast.save
      render json: @podcast.formatted
    else
      render json: @podcast.errors, status: :unprocessable_entity
    end
  end


  private
    def podcast_params
      params.require(:podcast).permit(:collectionId, :collectionViewUrl, :artworkUrl600, :collectionName, :artistName, :genres)
    end
end
