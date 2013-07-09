class ResellersController < ApplicationController

  include StatesHelper

  # GET /resellers
  # GET /resellers.json
  def index
    @resellers = Reseller.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @resellers }
    end
  end

  # GET /resellers/1
  # GET /resellers/1.json
  def show
    @reseller = Reseller.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @reseller }
    end
  end

  # GET /resellers/new
  # GET /resellers/new.json
  def new
    @reseller = Reseller.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @reseller }
    end
  end

  # GET /resellers/1/edit
  def edit
    @reseller = Reseller.find(params[:id])
  end

  # POST /resellers
  # POST /resellers.json
  def create
    @reseller = Reseller.new(params[:reseller])

    respond_to do |format|
      if @reseller.save
        format.html { redirect_to '/partner', notice: 'Reseller was successfully created.' }
        format.json { render json: @reseller, status: :created, location: @reseller }
      else
        format.html { render action: "new" }
        format.json { render json: @reseller.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /resellers/1
  # PUT /resellers/1.json
  def update
    @reseller = Reseller.find(params[:id])

    respond_to do |format|
      if @reseller.update_attributes(params[:reseller])
        format.html { redirect_to @reseller, notice: 'Reseller was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @reseller.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /resellers/1
  # DELETE /resellers/1.json
  def destroy
    @reseller = Reseller.find(params[:id])
    @reseller.destroy

    respond_to do |format|
      format.html { redirect_to resellers_url }
      format.json { head :no_content }
    end
  end
end
