class ApplicationController < ActionController::Base
  helper_method :logged_in?

  def logged_in?
    !session[:user_id].nil? # !!session[:user_id]
  end
end
