class Api::V1::AuthController < ApplicationController
  def create
    @user = User.find_by(email: login_params[:email])
    if @user && @user.authenticate(login_params[:password])
      token = JWT.encode({ user_id: @user.id }, "secret")
      @user.update(online: true)
      render json: { user: ActiveModel::Serializer::UserSerializer.new(@user), jwt: token}, status: :accepted
    else
      render json: { message: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def show
    user_id = JWT.decode(request.headers["Authorization"], nil, false)[0]["user_id"]
    user = User.find(user_id)
    user.update(online: true)
    render json: { user: ActiveModel::Serializer::UserSerializer.new(user)}
  end

  def logout
    user_id = JWT.decode(request.headers["Authorization"], nil, false)[0]["user_id"]
    user = User.find(user_id)
    user.update(online: false)
  end

  private

  def login_params
    params.permit(:email, :password)
  end
end
