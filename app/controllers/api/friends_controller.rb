module Api
  class FriendsController < ApplicationController
    def show
      @friend = User.find(params[:id])
      render json: @friend
    end    
  end
end