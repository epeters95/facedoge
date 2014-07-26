module Api
  class UsersController < ApplicationController
    def show
      @user = User.find(params[:id])
      render :show
    end
    
    def index
      @users = User.all
      render json: @users
    end
  end
end