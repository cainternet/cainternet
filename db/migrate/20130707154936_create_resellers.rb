class CreateResellers < ActiveRecord::Migration
  def change
    create_table :resellers do |t|

      t.string :full_name
      t.string :company_name
      t.string :website
      t.string :company_type
      t.string :address_street
      t.string :address_city
      t.string :address_zip
      t.string :address_country
      t.string :phone
      t.string :email
      t.timestamps
    end
  end
end
