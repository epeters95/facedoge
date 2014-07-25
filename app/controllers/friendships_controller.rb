class FriendshipsController < ApplicationController
  def create
    @friendship = Friendship.new(friendship_params)
    if @friendship.save

      render json: @friendship
  end

  private
  def friendship_params
    params.require(:friendship).permit(:in_friend_id, :out_friend_id)
  end
end
