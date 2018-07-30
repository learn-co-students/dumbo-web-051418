class AuthController < ApplicationController

  def login
    u = User.find_by(username: params[:username])
    if u && u.authenticate(params[:password])
      token = issue_token({ 'user_id': u.id })
      render json: {'token': token }
    else
      render json: {'error': 'Could not find or authenticate user'}, status: 401
    end
  end

  def get_current_user
    if current_user
      render json: { user: current_user }
    else
      render json: { error: 'no user' }
    end
  end
end
