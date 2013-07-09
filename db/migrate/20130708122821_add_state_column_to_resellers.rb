class AddStateColumnToResellers < ActiveRecord::Migration
  def change
  	add_column :resellers, :state, :string
  end
end
