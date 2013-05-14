class CreateCityServices < ActiveRecord::Migration
  def change
    create_table :city_services do |t|
      t.integer :city_id
      t.string :city_name
      t.string :service
      t.boolean :available
      t.timestamps
    end
  end
end
