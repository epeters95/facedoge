class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user) # TODO: implement
      redirect_to root_url
    else
      flash[:errors] = @user.errors.full_messages
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
  
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
