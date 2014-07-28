module Api
  class CommentsController < ApplicationController
    def create
      @comment = Comment.new(comment_params)
      if @comment.save
        render json: @comment
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def destroy
      @comment = Comment.find(params[:id])
      if @comment.destroy
        render json: @comment
      else
        render json: "Couldn't find comment to #destroy"
      end
    end
    
    private
    def comment_params
      params.require(:comment).permit(:body, :post_id, :user_id)
    end
  end
end