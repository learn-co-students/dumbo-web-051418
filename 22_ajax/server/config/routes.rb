Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/brews/strongest', to: 'brews#strongest', as: 'strongest'

  resources :brews, except: [:new, :edit]
  resources :purchases, only: [:create]

  # get '/signup', to: 'users#new'
  # post '/signup', to: 'users#create', as: 'users'

  # get '/login', to: 'sessions#new'
  # post '/login', to: 'sessions#create'
  # delete '/logout', to: 'sessions#destroy'

end
