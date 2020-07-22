Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create]
      resources :categories, only: :index
      resources :following, only: [:create, :destroy]
      
      post "/following/:id", to: "following#show"
      get "/categories/:title", to: "categories#show"
      get "/users/:username", to: "users#show"
      post "session", to: "session#sign_in"
      delete "session", to: "session#sign_out"
      get "current_user", to: "session#current_logged_in_user"
    end
  end
end
