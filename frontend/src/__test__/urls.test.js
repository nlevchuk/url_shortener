import { isUrlValid, prepareUrl } from '../urls';

describe('#isUrlValid', () => {
  describe('returns false', () => {
    it('if url just a word', () => {
      expect(isUrlValid('hello')).toBeFalsy();
    });

    it('if url invalid', () => {
      expect(isUrlValid('hello.r')).toBeFalsy();
    });

    it('if url invalid', () => {
      expect(isUrlValid('www.hello.ru world')).toBeFalsy();
    });

    it('if url invalid', () => {
      expect(isUrlValid('https://hello')).toBeFalsy();
    });
  });

  describe('returns true', () => {
    it('if url valid', () => {
      expect(isUrlValid('hello.ru')).toBeTruthy();
    });

    it('if url valid', () => {
      expect(isUrlValid('www.hello.ru')).toBeTruthy();
    });

    it('if url valid', () => {
      expect(isUrlValid('http://hello.ru')).toBeTruthy();
    });

    it('if url valid', () => {
      expect(isUrlValid('http://www.hello.ru')).toBeTruthy();
    });

    it('if url valid', () => {
      expect(isUrlValid('https://www.hello.ru')).toBeTruthy();
    });

    it('if url valid', () => {
      expect(isUrlValid('ftp://www.hello.ru')).toBeTruthy();
    });
  });
});

describe('#prepareUrl', () => {
  it('should add http:// if protocol missing', () => {
    expect(prepareUrl('hello.ru')).toEqual('http://hello.ru');
  });

  it('should just return url if protocol exists', () => {
    expect(prepareUrl('http://hello.ru')).toEqual('http://hello.ru');
  });

  it('should just return url if protocol exists', () => {
    expect(prepareUrl('https://hello.ru')).toEqual('https://hello.ru');
  });

  it('should just return url if protocol exists', () => {
    expect(prepareUrl('ftp://hello.ru')).toEqual('ftp://hello.ru');
  });
});
