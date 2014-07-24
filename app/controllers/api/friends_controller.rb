module Api
  class FriendsController < ApplicationController
    def show
      @friend = User.find(params[:id])
      render :show
    end
  end
end