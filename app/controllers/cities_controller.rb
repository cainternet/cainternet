class CitiesController < ApplicationController
  layout 'admin'

  def counties
    @counties = City.uniq.pluck(:county)
    @counties = @counties.sort
  end

  def cities
    @county = params[:county]
    @cities = City.where("county = ?", @county)
  end

  def show
  end

  def new
  end

  def edit
  end

  def create
  end

  def update
  end

  def destroy
  end

end
