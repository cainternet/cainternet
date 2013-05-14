class ServicesController < ApplicationController
  layout 'admin'

  # GET /services
  # GET /services.json
  def index
    @services = Service.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @services }
    end
  end

  # GET /services/1
  # GET /services/1.json
  def show
    @service = Service.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @service }
    end
  end

  # GET /services/new
  # GET /services/new.json
  def new
    @service = Service.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @service }
    end
  end

  # GET /services/1/edit
  def edit
    @service = Service.find(params[:id])
  end

  # POST /services
  # POST /services.json
  def create
    @service = Service.new(params[:service])

    respond_to do |format|
      if @service.save

        # Create Records of CityServices for every city w/ new service
        @cities = City.all
        @cities.each do |c| 
          CityService.create!( :service => @service.service, :city_id => c.id, :available => true, :city_name => c.city )
        end

        format.html { redirect_to @service, notice: 'Service was successfully created.' }
        format.json { render json: @service, status: :created, location: @service }
      else
        format.html { render action: "new" }
        format.json { render json: @service.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /services/1
  # PUT /services/1.json
  def update
    @service = Service.find(params[:id])

    respond_to do |format|
      if @service.update_attributes(params[:service])
        format.html { redirect_to @service, notice: 'Service was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @service.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /services/1
  # DELETE /services/1.json
  def destroy
    @service = Service.find(params[:id])
    @service.destroy

    @city_services = CityService.destroy_all( :service => @service.service )

    respond_to do |format|
      format.html { redirect_to services_url }
      format.json { head :no_content }
    end
  end
end
