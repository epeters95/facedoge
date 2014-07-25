module Api
  class CurrentUsersController < UsersController
    def show
      render json: current_user
    end
  end
end