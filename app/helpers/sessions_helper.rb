module SessionsHelper
  def login!(user)
    session[:session_token] = user.reset_session_token!
    cookies[:facedoge_session_token] = session[:session_token]
    @current_user = user
  end
  
  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    cookies[:current_user] = 0
  end
  
  def current_user
    @current_user || User.find_by_session_token(session[:session_token])
  end
  
  def signed_in?
    !!(current_user)
  end
end
