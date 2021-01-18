class PostsController < ApplicationController
  def index
    @posts = Post.all
    respond_to do |format|

      format.json { render json: { data: @posts } }
    end
  end

  def show

    @post = Post.find(params[:id])

    respond_to do |format|

      format.json { render json: { post: @post }}
    end
  end
end
