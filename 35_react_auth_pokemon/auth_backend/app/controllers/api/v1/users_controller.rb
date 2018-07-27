class Api::V1::UsersController < ApplicationController


  def create
    @user = User.create(username: params[:username], password: params[:password])
    if @user.valid? 
      render json: { id: @user.id, username: @user.username }
    else
      render json: { error: "User not created" }
    end
  end
end
