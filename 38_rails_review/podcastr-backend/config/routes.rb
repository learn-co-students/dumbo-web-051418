Rails.application.routes.draw do
  resources :users, only: [:create]
  resources :podcasts, only: [:create]
  resources :queries, only: [:create]
  resources :favorites, only: [:create]

  delete '/favorites', to: "favorites#destroy"

  post '/signin', to: "users#signin"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
