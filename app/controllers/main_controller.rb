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
        	@services = CityService.where(:city_name => @city_name).where(:available => true).map { |s| s.service }
        	@services_and_details = Service.where(:service => @services)
        	render :json => @services_and_details
      else
        render :json => { :error => "No City Found" }
      end
    end

    def get_service_details
    	@service_name = params[:service_name]

    	if Service.exists?( :service => @service_name )
        	@service = Service.where(:service => @service_name)
        	render :json => @service
      	else
       		render :json => { :error => "No Service Found" }
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
