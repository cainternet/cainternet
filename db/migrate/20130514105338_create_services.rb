class CreateServices < ActiveRecord::Migration
  def change
    create_table :services do |t|
      t.string :service
      t.string :description
      t.timestamps
    end
  end
end
