class CreateServices < ActiveRecord::Migration
  def change
    create_table :services do |t|
      t.string :service
      t.boolean :business
      t.timestamps
    end
  end
end
