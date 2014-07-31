module Api
  class ImagesController < ApplicationController
    def create
      @image = Image.new(image_params)
      if @image.save
        render json: @image
      else
        render json: @image.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def update
      @image = Image.find(params[:id])
      if @image.update_attributes(image_params)
        render json: @image
      else
        render json: @image.errors.full_messages, status: :unprocessable_entity
      end
    end
  
    def show
      @image = Image.find(params[:id])
      render json: @image
    end
  
    def destroy
      @image = Image.find(params[:id])
      if @image.destroy
        render json: @image
      else
        render json: "Couldn't #destroy image"
      end
    end
  
    private
    def image_params
      params.require(:image).permit(:file_url, :user_id, :profile)
    end
  end
end