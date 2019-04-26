class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def create
    user_without_penpal = User.all.find do |user|
      !user.my_penpal
    end

    @user = User.new(user_params)

    if @user.save
      @user.my_penpal = user_without_penpal unless user_without_penpal.nil?

      @token = JWT.encode({user_id: @user.id}, "secret")
      render json: { user: ActiveModel::Serializer::UserSerializer.new(@user), jwt: @token}, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find(params[:id])

    @user.update(user_params)

    if @user.valid?
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation, :name, :image, :song, :online)
  end
end
