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
        flash.now[:errors] = @user.errors.full_messages
        render :new
      end
    else
      flash.now[:errors] = ["Email already taken"]
      render :new
    end
  end
  
  def new
    if signed_in?
      redirect_to root_url
    else
      @user = User.new
      render :new
    end
  end
  
  def show
    @user = User.find(params[:id])
    redirect_to "/#/users/#{params[:id]}"
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
