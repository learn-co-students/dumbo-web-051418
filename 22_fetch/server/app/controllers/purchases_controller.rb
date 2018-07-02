class PurchasesController < ApplicationController
  # def new
  #   @purchase = Purchase.new
  #   @brews = Brew.all
  # end

  def create
    #/purchases
    @purchase = Purchase.new(purchase_params)

    if  @purchase.valid? # save
      @purchase.save
      # redirect_to purchase_path(@purchase.id)
      # redirect_to purchase_path(@purchase)
      # redirect_to @purchase
      render json: @purchase
    else
      # @brews = Brew.all
      # render "new"
      render json: {errors: @purchase.errors}
    end
  end

  # def show
  # end

  private

  def purchase_params
    params.require(:purchase).permit(:customer_name, :brew_id)
  end
end
