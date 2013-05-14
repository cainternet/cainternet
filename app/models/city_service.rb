class CityService < ActiveRecord::Base
  attr_accessible :service, :city_id, :available, :city_name
  belongs_to :city
end
