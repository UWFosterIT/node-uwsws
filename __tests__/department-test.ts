import { ICertFetcher } from '../src/certFetcher/ICertFetcher';
import { UwSws, CertFetcherManager } from '../src/index';

import config from './setup/config';

let fetcher: ICertFetcher;
let certData;
let uwSws: UwSws;

describe('Department', () => {
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
    it('should return some', () => {
      const options = { collegeAbbreviation: 'engr' };

      return uwSws.department.search(options)
        .then((result) => {
          expect(result!.length).toBeGreaterThan(5);
        });
    });

    it('for a specific year and quarter should return some', () => {
      const options = {
        collegeAbbreviation: 'engr',
        quarter: 'winter',
        year: 2015,
      };

      return uwSws.department.search(options)
        .then((result) => {
          expect(result!.length).toEqual(10);
        });
    });
  });
});
