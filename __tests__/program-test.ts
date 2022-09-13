import { ICertFetcher } from '../src/certFetcher/ICertFetcher';
import { UwSws, CertFetcherManager } from '../src/index';

import config from './setup/config';

let fetcher: ICertFetcher;
let certData;
let uwSws: UwSws;

describe('Program', () => {
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

  describe('Search', () => {
    it('should return some that match the query', () => {
      const options = {
        majorAbbr: 'C SCI',
        quarter: 'spring',
        year: '2018',
      };

      return uwSws.program.search(options)
        .then((result) => {
          expect(result!.length).toBeGreaterThan(0);
        });
    });
  });

  describe('Get', () => {
    it('should return one', () => {
      const options = {
        majorAbbr: 'C SCI',
        firstEffectiveQuarter: 'spring',
        firstEffectiveYear: '2018',
      };

      return uwSws.program.get(options)
        .then((result) => {
          expect(result!.Href).toEqual('/student/v5/Program/C%20SCI,00,2018,spring.json');
        });
    });
  });

  describe('All', () => {
    it('should return many of them', () => {
      const options = {
        majorAbbr: 'tmmba',
        quarter: 'spring',
        year: '2015',
      };

      return uwSws.program.all(options)
        .then((result) => {
          expect(result!.length).toBeGreaterThan(0);
        });
    });
  });
});
