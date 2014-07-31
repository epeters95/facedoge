module Api
  class PostLikesController < ApplicationController
    def create
      @post_like = PostLike.new(post_like_params)
      if @post_like.save
        render json: @post_like
      else
        render json: @post_like.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def destroy
      @post_like = PostLike.find(params[:id])
      if @post_like.destroy
        render json: @post_like
      else
        render json: "Couldn't find post_like to #destroy"
      end
    end
    
    private
    def post_like_params
      params.require(:post_like).permit(:post_id, :user_id)
    end
  end
end