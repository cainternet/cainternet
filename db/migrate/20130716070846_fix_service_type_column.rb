class FixServiceTypeColumn < ActiveRecord::Migration
  def change
  	rename_column :services, :type, :service_type
  end
end
