Rails.application.routes.draw do
  # TODO: don't keep index
  resource :session, only: [:create, :new, :destroy]
  resources :users, only: [:create, :new, :show, :index]
  resources :profiles, only: [:create, :edit, :update]
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :index, :update]
    resources :friendships, only: [:create, :show, :destroy]
    resource :current_user, only: [:show]
    resources :posts, only: [:create, :show, :destroy] # Add edit functionality later
    resources :comments, only: [:create, :show, :destroy]
    resources :images, only: [:create, :show, :destroy]
    resources :post_likes, only: [:create, :destroy]
    resources :comment_likes, only: [:create, :destroy]
  end
  
  root to: "static_pages#root"
end
