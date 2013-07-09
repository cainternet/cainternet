class MainController < ApplicationController

	def index
	end

	def customers
	end

	def about
	end

	def business
	end

	def residential
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

	def partner_program_form
		@reseller = Reseller.new
	end

	def reseller_create
		@reseller = Reseller.new(params[:test])

		respond_to do |format|
	      if @reseller.save
	        format.html { redirect_to '/partner_program', notice: 'Reseller was successfully created.' }
	      else
	        format.html { render action: "new" }
	      end
	    end
	    
	end


end
