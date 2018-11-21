require 'rails_helper'

describe 'POST /api/v1/short-urls', type: :request do
  context '#success' do
    before(:each) do
      post '/api/v1/short-urls', params: { original_url: 'https://devcenter.heroku.com' }
    end

    it 'returns http success status' do
      expect(response).to have_http_status(200)
    end

    it 'returns not empty url' do
      json = JSON.parse(response.body)
      expect(json['short_url']).to_not be_nil
    end
  end

  context '#error' do
    before(:each) do
      post '/api/v1/short-urls'
    end

    it 'returns http error status' do
      expect(response).to have_http_status(400)
    end

    it 'returns empty url' do
      json = JSON.parse(response.body)
      expect(json['short_url']).to be_nil
    end
  end
end
