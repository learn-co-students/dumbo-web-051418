class ApplicationController < ActionController::API

  def issue_token(payload)
    JWT.encode(payload, secret)
  end

  def current_user
    User.find_by(id: decoded_token)
  end

  def token
    request.headers['Authorization']
  end

  def decoded_token
    if token
      # lets decode
      begin
        decoded = JWT.decode(token, secret)
        decoded[0]["id"]
      rescue JWT::DecodeError
        ""
      end
    else
      ""
    end
  end


  def secret
    "straightouttaterminal"
  end
end
