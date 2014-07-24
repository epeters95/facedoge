module Api
  class FriendshipsController < ApplicationController
    def create
      @friendship = Friendship.new(friendship_params)
      if @friendship.save
        receiver = User.find(params[:friendship][:in_friend_id])
        sender = User.find(params[:friendship][:out_friend_id])
        receiver.in_friendships << @friendship
        sender.out_friendships << @friendship
        
        render json: @friendship
      else
        render json: @friendship.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    private
    def friendship_params
      params.require(:friendship).permit(:in_friend_id, :out_friend_id)
    end
  end
end