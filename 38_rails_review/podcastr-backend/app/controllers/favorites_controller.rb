class FavoritesController < ApplicationController

  def create
    @favorite = Favorite.new(favorite_params)

    if @favorite.valid?
      @favorite.save
      render json: {message: "success"}
    else
      render json: {message: "nah brah"}
    end
  end

  def destroy
    @favorite = Favorite.find_by(favorite_params)

    if @favorite
      @favorite.destroy
      render json: {message: "destroyed"}
    else
      render json: {message: "nah brah"}
    end
  end


  private
    def favorite_params
      params.require(:favorite).permit(:user_id, :podcast_id)
    end
end
