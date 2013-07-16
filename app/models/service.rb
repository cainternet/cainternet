class Service < ActiveRecord::Base
  attr_accessible :service, :description, :service_type, :details
end
