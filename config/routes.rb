Rails.application.routes.draw do
  # TODO: don't keep index
  resources :users, only: [:create, :new, :show, :index] do
    resources :friendships, only: [:create]
  end
  resource :session, only: [:create, :new, :destroy]
  
  root to: "users#index"
end
