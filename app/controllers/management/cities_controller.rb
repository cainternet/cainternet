module Management
  
  class CitiesController < ApplicationController
    layout 'admin'

    def counties
      @counties = City.uniq.pluck(:county)
      @counties = @counties.sort
    end

    def cities
      @county = params[:county]
      @city_services = CityService.joins(:city).where(cities: {county: params[:county]})
      @cities = @city_services.uniq(:city).pluck(:city)
    end

    def update_city_service
      city_service = CityService.find(params[:id])
      city_service.update_attributes(:available => params[:available])
      render :json => { :success => "Change Saved Successfully!" }
    end

  end

end
