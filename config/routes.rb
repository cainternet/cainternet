CaliforniaInternet::Application.routes.draw do

  # Admin Area
  resources :services
  match 'counties', to: 'cities#counties'
  match 'county/:county', to: 'cities#cities'

  # Visitor Area
  match 'partner', to: 'main#partner_program'
  match 'service', to: 'main#service_areas'
  match 'check_service', to: 'main#check_service'
  match 'customers', to: 'main#customers'
  match 'about', to: 'main#about'
  root :to => 'main#index'

end
