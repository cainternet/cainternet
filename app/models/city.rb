class City < ActiveRecord::Base
  # attr_accessible :title, :body
  has_many :city_services, :dependent => :delete_all
end
