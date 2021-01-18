Rails.application.routes.draw do
  get 'posts/index'
  get 'posts/show'
  get 'fake', to: 'pages#home'
  root to: 'pages#home'
  resources :posts, only: [:index, :show, :new, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
