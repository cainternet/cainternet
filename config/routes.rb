CaliforniaInternet::Application.routes.draw do

  match 'customers', to: 'main#customers'
  root :to => 'main#index'

end
