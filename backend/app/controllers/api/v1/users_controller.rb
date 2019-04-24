class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)

    if @user.save
      user_without_penpal = User.all.find do |user|
        !user.my_penpal
      end

      if user_without_penpal.nil?
        @user.my_penpal = user_without_penpal
      end

      @token = JWT.encode({user_id: @user.id}, "secret")
      render json: { user: @user, jwt: @token }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation, :name)
  end
end
