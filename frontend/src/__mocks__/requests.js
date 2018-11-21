const fetchShortUrl = jest.fn()
  .mockImplementation(() => ({
    short_url: 'http://ex.com/shrt',
  }));

export { fetchShortUrl };
