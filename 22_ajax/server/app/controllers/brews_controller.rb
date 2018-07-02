class BrewsController < ApplicationController
  before_action :find_brew, only: [:show, :edit, :update]

  def index
    @brews = Brew.all
    render json: {brews: @brews}

    # if !logged_in?
    #   redirect_to login_path
    # end
  end

  def show
    render json: @brew
  end

  # def new
  #   @brew = Brew.new()
  # end

  def create
    @brew = Brew.new(brew_params)
    if @brew.save
      # redirect_to brew_path(@brew)
      render json: @brew
    else
      # render 'new'
      render json: {errors: @brew.errors}, status: 422
    end
  end

  # def edit
  #   @brew = Brew.find(params[:id])
  # end

  def update
    if @brew.update(brew_params)
      # redirect_to brew_path(@brew)
      render json: @brew
    else
      # render 'edit'
      render json: {errors: @brew.errors}
    end
  end

  def strongest
    @strongest_brews = Brew.strongest
    render json: @strongest_brews
  end

  private

  def find_brew
    @brew = Brew.find(params[:id])
  end

  def brew_params
    params.require(:brew).permit(:blend_name,:origin,:notes,:strength)
  end

end
