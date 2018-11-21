module Api::V1
  class ShortUrlsController < ApplicationController
    def create
      render json: { short_url: url_service.make_short_url }, status: 200
    rescue => e
      render json: { short_url: nil }, status: 400
    end

    private

    def url_params
      params.slice(:original_url)
    end

    def url_service
      @url_service ||= UrlService.new(url_params)
    end
  end
end
