module Api
  class CommentLikesController < ApplicationController
    def create
      @comment_like = CommentLike.new(comment_like_params)
      if @comment_like.save
        render json: @comment_like
      else
        render json: @comment_like.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def destroy
      @comment_like = CommentLike.find(params[:id])
      if @comment_like.destroy
        render json: @comment_like
      else
        render json: "Couldn't find comment_like to #destroy"
      end
    end
    
    private
    def comment_like_params
      params.require(:comment_like).permit(:comment_id, :user_id)
    end
  end
end