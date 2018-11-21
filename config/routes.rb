Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      namespace :admin do
        get :urls, to: 'urls#index'
      end
      post 'short-urls', to: 'short_urls#create'
    end
  end

  get ':url', to: 'redirects#show'
end
