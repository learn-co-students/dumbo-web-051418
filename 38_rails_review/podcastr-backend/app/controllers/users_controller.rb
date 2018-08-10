class UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.valid?
      @user.save
      render json: @user.formatted
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def signin
    @user = User.find_by(username: user_params[:username])
    if @user && @user.authenticate(user_params[:password])
      render json: @user.formatted
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
    def user_params
      params.require(:user).permit(:username, :password)
    end
end
