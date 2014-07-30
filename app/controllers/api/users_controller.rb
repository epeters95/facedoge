module Api
  class UsersController < ApplicationController
    def show
      @user = User.find(params[:id])
      render :show
    end
    
    def index
      @users = User.all
      render json: @users
    end
    
    def update
      @user = User.find(params[:id])
      @user.profile.destroy();
      @profile = Profile.new(profile_params)
      if @profile.save
        @user.profile = @profile
        if @user.update_attributes({ email: params[:email] })
          render json: @user
        else
          render json: @user.errors.full_messages, status: :unprocessable_entity
        end
      else
        render json: @profile.errors.full_messages, status: :unprocessable_entity
      end
    end
    
    def profile_params
      params.require(:profile).permit(:bio, :first_name, :last_name, :user_id)
    end
  end
end