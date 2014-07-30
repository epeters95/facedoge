class ImagesController < ApplicationController
  def create
    @image = Image.new(image_params)
  end
  
  private
  def image_params
    params.require(:image).permit(:file_url, :user_id)
  end
end