class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password])
    if @user
      login!(@user)
      redirect_to root_url
    else
      flash[:errors] = ["Wrong username or password."]
      redirect_to :back
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
  
  def destroy
    logout!
    redirect_to new_user_url
  end
end
