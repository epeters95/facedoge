module Api
  class PostsController < ApplicationController
    def create
      @post = Post.new(post_params)
      if @post.save
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def destroy
      @post = Post.find(params[:id])
      if @post.destroy
        render json: @post
      else
        render json: "Couldn't find post to #destroy"
      end
    end
    
    private
    def post_params
      params.require(:post).permit(:body, :user_id)
    end
  end
end