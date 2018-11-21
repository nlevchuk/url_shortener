import { fetchShortUrl } from '../requests';

describe('#fetchShortUrl', () => {
  it('should return an object if status is OK', () => {
    global.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve({ short_url: 'http://ex.com/shrt' });
      }),
    }));

    expect(fetchShortUrl()).resolves.toEqual({ short_url: 'http://ex.com/shrt' });
  });

  it('should throw an error if status is not OK', () => {
    global.fetch = jest.fn().mockImplementation(() => ({
      status: 400,
    }));

    expect(fetchShortUrl()).rejects.toEqual(Error('Something went wrong! Try again later.'));
  });
});
