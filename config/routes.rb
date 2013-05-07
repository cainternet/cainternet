CaliforniaInternet::Application.routes.draw do

  match 'customers', to: 'main#customers'
  match 'about', to: 'main#about'
  root :to => 'main#index'

end
