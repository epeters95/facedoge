Rails.application.routes.draw do
  # TODO: don't keep index
  resources :users, only: [:create, :new, :show, :index] do
    resources :friendships, only: [:create]
  end
  resource :session, only: [:create, :new, :destroy]
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :index]
    resources :friendships, only: [:create, :show]
    # resources :posts
    # resources :comments
  end
  
  root to: "static_pages#root"
end
