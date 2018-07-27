class Api::V1::AuthController < ApplicationController


  def login
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: { token: issue_token({ id: user.id }) }
    else
      render json: { error: "Auth Failed" }, status: 401
    end
  end

  def get_current_user
    render json: current_user
  end
end
