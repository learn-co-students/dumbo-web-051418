class ApplicationController < ActionController::Base
  helper_method :logged_in?
  before_action :logged_in?

  def current_user
    if session[:user_id]
      @user = User.find(session[:user_id])
    end
  end

  def authorized
    redirect_to login_path unless logged_in?
  end

  def logged_in?
    !!current_user
  end
end
