# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130708122821) do

  create_table "cities", :force => true do |t|
    t.string   "city"
    t.string   "county"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "city_services", :force => true do |t|
    t.integer  "city_id"
    t.string   "city_name"
    t.string   "service"
    t.boolean  "available"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "resellers", :force => true do |t|
    t.string   "full_name"
    t.string   "company_name"
    t.string   "website"
    t.string   "company_type"
    t.string   "address_street"
    t.string   "address_city"
    t.string   "address_zip"
    t.string   "address_country"
    t.string   "phone"
    t.string   "email"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
    t.string   "state"
  end

  create_table "services", :force => true do |t|
    t.string   "service"
    t.boolean  "business"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

end
