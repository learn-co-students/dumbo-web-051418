Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  get 'login', to: 'sessions#new', as: 'login'
  post 'login', to: 'sessions#create'
end
