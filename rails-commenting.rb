# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) The controller for Blog  uses Application contoller as a parent component. This contoller only works for "Blog"
class BlogPostsController < ApplicationController
  def index
    # 2) Allows the "GET" method to retive all json data
    @posts = BlogPost.all
  end

  def show
    # 3) allows access to a single json entry via its ID
    @post = BlogPost.find(params[:id])
  end

  # 4) "This is where I'd put my method IF I HAD ONE" Mr. Turner,  FairlyOddParents -- A CREATE method that doesnt save
  # https://www.youtube.com/watch?v=_Tc0C3fhjt0  -- 11secs
  def new
  end

  def create
    # 5) Call the CREATE method and save it upon accpetance through validations
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.delete
      redirect_to blog_posts_path
    else
      # 6)Shows that the @post has not been destroyed by displaying it amongst the other posts
      redirect_to blog_post_path(@post)
    end
  end

  # 7) "internal helper models" private is only accessible within our app and (we) mainly used for setting up strong Parameters
  private
  def blog_post_params
    # 8)to create a blog post two arguments of title, and contnet must be passed or post will be rejected/ filled with nil values.
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9)The Model of BlogPost
class BlogPost < ApplicationRecord
  # 10) Takes the child component of comments and attributes its tables as data to each individual entry of BlogPost
  has_many :comments
end
