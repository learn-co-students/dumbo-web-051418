class QueriesController < ApplicationController

  def create
    @query = Query.new(term: params[:term])
    if @query.results
      render json: @query.results
    else
      render json: "oops"
    end
  end


end
