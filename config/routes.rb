CaliforniaInternet::Application.routes.draw do

  # Admin Area
  namespace :management do
    match '', to: 'services#index'
    resources :services
    match 'counties', to: 'cities#counties'
    match 'county/:county', to: 'cities#cities'
    match 'county/update_city_service/:id', to: 'cities#update_city_service', :defaults => { :format => 'json' }
  end

  # Visitor Area
  match 'partner', to: 'main#partner_program'
  match 'getservice', to: 'main#list_services'
  match 'show_services', to: 'main#show_services', :defaults => { :format => 'json' }
  match 'check_service', to: 'main#check_service'
  match 'customers', to: 'main#customers'
  match 'about', to: 'main#about'
  root :to => 'main#index'

end
