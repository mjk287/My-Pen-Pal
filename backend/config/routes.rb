Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server, at: '/cable'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show, :create, :update, :destroy]
      resources :posts, only: [:index, :create]

      get '/my_posts/:user_id', to: 'posts#my_posts'
      get '/our_posts/:user_id', to: 'posts#our_posts'
      post '/logout', to: 'auth#logout'
      post '/login', to: 'auth#create'
      get '/current_user', to: 'auth#show'
    end
  end

end
