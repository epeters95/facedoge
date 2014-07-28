class UsersController < ApplicationController
  before_filter :login_required, only: :show
  
  def create
    @user = User.new(user_params)
    @profile = Profile.new(profile_params)
    @user.profile = @profile
    
    if @profile.save
      if @user.save
        login!(@user)
        redirect_to root_url
      else
        flash[:errors] = @user.errors.full_messages
        render :new
      end
    else
      flash[:errors] = @profile.errors.full_messages
      render :new
    end
  end
  
  def new
    @user = User.new
    render :new
  end
  
  def show
    @user = User.find(params[:id])
    redirect_to "/#/users/#{params[:id]}"
    
    # TODO: Implement server-friendly user show page
    # render :show
  end
  
  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
  
  def profile_params
    # Apparently rails associates foreign key user_id automatically
    params.require(:profile).permit(
      :first_name,
      :last_name,
      :name_tag,
      :bio
    )
  end
end
