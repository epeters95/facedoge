class ProfilesController < ApplicationController
  before_filter :login_required, only: :update
  
  # def create
  #   # ASSUMING user is logged in before profile details are sent
  #   if params[:profile][:user_id] != current_user.id
  #     render "Can't create profile for someone else!"
  #   else
  #
  #     @profile = Profile.new(profile_params)
  #     if @profile.save
  #       current_user.profile = @profile
  #       render json: @profile
  #     else
  #       render json: @profile.errors.full_messages, status: :unprocessable_entity
  #     end
  #   end
  # end
  
  def update
    @profile = Profile.find(params[:id])
    if @profile.update_attributes(profile_params)
      render json: @profile
    else
      render json: @profile.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def edit
    # Should be taken care of by Backbone router...
    # TODO: remove
  end
  
  private
  def profile_params
    params.require(:profile).permit(
      :first_name,
      :last_name,
      :name_tag,
      :bio
    )
  end
end
