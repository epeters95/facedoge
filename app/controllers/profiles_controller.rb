class ProfilesController < ApplicationController
  before_filter :login_required, only: :update
  
  def update
    @profile = Profile.find(params[:id])
    if @profile.update_attributes(profile_params)
      render json: @profile
    else
      render json: @profile.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  private
  def profile_params
    params.require(:profile).permit(
      :first_name,
      :last_name,
      :bio
    )
  end
end
