class SessionsController < ApplicationController
  def new
    # log in form

    # render 'sessions/new'
    if logged_in?
      redirect_to brews_path
    end
  end

  def create
    # log in post action

    user = User.find_by(username: params["username"])
    if user.authenticate(params["password"])
      # do something

      # log the user in
      session[:user_id] = user.id

      # send them somewhere
      redirect_to brews_path
    else
      # render the form again with some error message
      render 'sessions/new'
    end
  end

  def destroy
    # log out action
    session[:user_id] = nil

    redirect_to login_path
  end
end
