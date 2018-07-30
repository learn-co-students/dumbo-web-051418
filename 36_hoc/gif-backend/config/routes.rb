Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post "/login", to: 'auth#login'
  get "/current_user", to: 'auth#get_current_user'

end
