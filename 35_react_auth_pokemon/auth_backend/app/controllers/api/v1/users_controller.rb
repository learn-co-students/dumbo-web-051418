class Api::V1::UsersController < ApplicationController


  def create
    user = User.create(username: params[:username], password: params[:password])
    if user.valid?
      render json: { token: issue_token({ id: user.id }) }
    else
      render json: { error: "User not created" }
    end
  end

  def get_team
    if current_user && current_user.id == params[:id].to_i
      render json: current_user.pokemons
    else
      render json: { error: 'not logged in' }
    end
  end

  def set_team
    if current_user && current_user.id == params[:id].to_i
      pokemon_ids = params[:pokemon].map { |p| p["id"] }
      if pokemon_ids.include?(129)
        pokemon_ids.delete(129)
        pokemon_ids << 130
      end
      current_user.update(pokemon_ids: pokemon_ids)
      render json: current_user.pokemons
    else
      render json: { error: 'not logged in' }
    end
  end
end
