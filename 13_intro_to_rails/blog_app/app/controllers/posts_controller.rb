class PostsController < ApplicationController

  # A controller is supposed to make sense of a request
  # and produce the correct output, it does this by actions.

  # Actions => After being sent here (the appropriate controller) from the router (config/routes.rb),
  # the controller tells what the application should do for the requested action.
  # These actions match up to what we did back for Sinatra

  # Index Action (GET '/post') => "Show me everything underneath a resource"
  # ======================
  # It will gather all of the items and show it in the
  # corresponding view
  def index
    @posts = Post.all

    # Because of Rails, we just tell it to RENDER
    # a page and tell it which page. It is smart enough
    # to know, "Hey, I want you to look inside of a folder called post
    # and find the index.html.erb page". It is infered from giving the
    # symbol.
    render :index
  end

  # New Action (GET '/posts/new') => "Show me the form to create something new"
  # ======================
  # The purpose of this action is to show us just a new form
  def new
    # We are going to use this in the form_for tag
    # Check out the documentation for it:
    #  - http://guides.rubyonrails.org/form_helpers.html#customizing-form-builders
    #  - http://guides.rubyonrails.org/form_helpers.html#using-form-helpers

    # It will use this instance variable inside as a requirement
    # And when we use a form_for tag, we will need to use
    # STRONG PARAMS for our `posts#create` action
    @post = Post.new

    render :new
  end

  # Create Action (POST '/posts') => "After someone submits a form, save it to the database"
  # ======================
  # We will take our STRONG PARAMS and use them to create a new Post and redirect
  # to their show page.
  def create
    @post = Post.create(post_params)

    # post_url comes from the prefix from our route
    redirect_to post_url(@post)
  end

  # Show Action (GET '/posts/:id') => "Take me to the individual post"
  # ======================
  # Just like Sinatra, we have to go through our params and find the
  # post we want to look back by a **UNIQUE** identifier! We will
  # then want to render the show page for a post `/views/posts/show.html.erb`
  def show
    @post = Post.find(params[:id])
    render :show
  end

  # These are methods we don't want other classes to know we have
  private

  # THIS IS VERY IMPORTANT FOR FORM_FOR TAGS IN VIEWS
  # The purpose is to let our controller know that we
  # are going to be sending in data in a certain shape and that
  # we will want to allow/permit certain pieces of that data to come through

  # The line is read as `Params is required to have a key called post, and
  # that we will allow the fields 'title' and 'content' to be passed in`
  def post_params
    params.require(:post).permit(:title, :content)
  end

end
