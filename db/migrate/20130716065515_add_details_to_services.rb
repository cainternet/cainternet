class AddDetailsToServices < ActiveRecord::Migration
  def change
  	add_column :services, :details, :string
  	add_column :services, :type, :string
  end
end
