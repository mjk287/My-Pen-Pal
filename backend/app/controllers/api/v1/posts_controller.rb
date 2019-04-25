class Api::V1::PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: @posts
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def my_posts
    user = User.find(params[:user_id])
    @posts = user.posts
    render json: @posts
  end

  def our_posts
    user = User.find(params[:user_id])
    @posts = user.our_posts
    render json: @posts
  end

  private

  def post_params
    params.permit(:title, :content, :user_id)
  end
end
