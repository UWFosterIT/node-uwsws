import { ICertFetcher } from '../src/certFetcher/ICertFetcher';
import { UwSws, CertFetcherManager } from '../src/index';

import config from './setup/config';

let fetcher: ICertFetcher;
let certData;
let uwSws: UwSws;

describe('Term', () => {
  const keys = ['Year', 'NextTerm', 'Quarter'];

  beforeAll(async () => {
    const certFetcherManager = new CertFetcherManager();

    fetcher = certFetcherManager.getFetcher('s3');
    certData = await fetcher.readCertificate(config.certInfo);

    uwSws = new UwSws({
      organizationName: config.organizationName,
      baseUrl: config.baseUrl,
      certData,
      // eslint-disable-next-line @typescript-eslint/dot-notation
      uwSwsLogLevel: config['uwSwsLogLevel'],
    });
  });

  describe('Current', () => {
    it('should return one when it is known to exist', () => uwSws.term.current().then((result) => {
      expect(Object.keys(result)).toEqual(expect.arrayContaining(keys));
    }));
  });

  describe('Next', () => {
    it('should return one when it is known to exist', () => uwSws.term.next().then((result) => {
      expect(Object.keys(result)).toEqual(expect.arrayContaining(keys));
    }));
  });

  describe('Previous', () => {
    it('should return one when it is known to exist', () => uwSws.term.previous().then((result) => {
      expect(Object.keys(result)).toEqual(expect.arrayContaining(keys));
    }));
  });

  describe('Search', () => {
    it('should return matching quarter and year', () => {
      const options = {
        quarter: 'autumn',
        year: new Date().getFullYear(),
      };
      return uwSws.term.get(options).then((result) => {
        expect(Object.keys(result)).toEqual(expect.arrayContaining(keys));
      });
    });
  });

  describe('Current and Next n', () => {
    it('should return n + 1 terms from current inclusive', () => uwSws.term.currentAndNext(2).then((result) => {
      expect(result.length).toEqual(3);
    }));
  });
});
