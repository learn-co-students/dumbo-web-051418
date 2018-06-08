Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Resources builds out every action for a controller as well as the appropriate
  # paths, but you must be comfortable with how resources translates to the code below
  resources 'posts', only: [:show, :index, :new, :create]
  # get '/posts', to: 'posts#index'
  # post '/posts', to: 'posts#create'
  # get '/posts/new', to: 'posts#new'
  # get '/posts/:id', to: 'posts#show', as: 'post'

end
