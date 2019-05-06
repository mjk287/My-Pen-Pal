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

  def show_comments
    @post = Post.find(params[:id])
    @comments = @post.comments
    render json: @comments
  end

  def liked
    @post = Post.find(params[:id])
    @post.update(liked: !@post.liked)

    render json: @post.liked
  end

  private

  def post_params
    params.permit(:title, :content, :user_id)
  end
end
