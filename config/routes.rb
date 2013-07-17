CaliforniaInternet::Application.routes.draw do

  # Admin Routes
  namespace :management do
    match '', to: 'services#index'
    resources :services
    match 'counties', to: 'cities#counties'
    match 'county/:county', to: 'cities#cities'
    match 'county/update_city_service/:id', to: 'cities#update_city_service', :defaults => { :format => 'json' }
  end

  # Visitor Routes
  match 'partner', to: 'main#partner_program'
  match 'getservice', to: 'main#list_services'
  match 'show_services', to: 'main#show_services', :defaults => { :format => 'json' }
  match 'check_service', to: 'main#check_service'
  match 'service_details', to: 'main#get_service_details'
  match 'customers', to: 'main#customers'
  match 'about', to: 'main#about'
  match 'business', to: 'main#business'
  match 'residential', to: 'main#residential'
  resources :resellers
  root :to => 'main#index'

end
