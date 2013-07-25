class AddSpeedAndPriceToServices < ActiveRecord::Migration
  def change
  	add_column :services, :speed, :string
  	add_column :services, :price, :string
  end
end
