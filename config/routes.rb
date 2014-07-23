Rails.application.routes.draw do
  resources :users, only: [:create, :new, :show, :index] # TODO: don't keep index
  resource :session, only: [:create, :new, :destroy]
  
  root to: "users#index"
end
