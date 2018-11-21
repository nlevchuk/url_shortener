class UrlService
  def initialize(options)
    @original_url = options[:original_url]
    @short_url = nil
  end

  def make_short_url
    @short_url = base_url + Digest::MD5.hexdigest(@original_url)[0..4]
    @short_url
  end

  private

  def base_url
    Rails.configuration.base_url
  end
end
