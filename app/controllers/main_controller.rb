class MainController < ApplicationController

	def index
	end

	def customers
	end

	def about
	end

	def business
	end

	def list_services
		render :layout => 'get_service' 
	end

	def show_services
      @city_name = params[:city_name]
      @city_name = @city_name.titleize
      if CityService.exists?( :city_name => @city_name )
        @services= CityService.where(:city_name => @city_name)
        render :json => @services
      else
        render :json => { :error => "No City Found" }
      end
    end

	def partner_program
	end

end
