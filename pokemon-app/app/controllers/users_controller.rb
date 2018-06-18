class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    # POST /users

    @user = User.new(user_params)

    if @user.valid?
      @user.save
      redirect_to user_path(@user)
    else
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
  end

  # edit, update

  private
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
