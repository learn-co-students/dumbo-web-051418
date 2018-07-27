Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :pokemons, only: [:index]
      resources :users, only: [:create]
      get "/users/:id/pokemon", to: 'users#get_team'
      post "/users/:id/pokemon", to: 'users#set_team'
      post "/auth", to: 'auth#login'
      get "/current_user", to: 'auth#get_current_user'
    end
  end
end
