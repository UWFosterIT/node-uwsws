import { ICertFetcher } from '../src/certFetcher/ICertFetcher';
import { UwSws, CertFetcherManager } from '../src/index';

import config from './setup/config';

let fetcher: ICertFetcher;
let certData;
let uwSws: UwSws;

describe('Curriculum', () => {
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

  describe('Search by dept', () => {
    it('should return some that match the query', () => {
      const options = {
        departmentAbbreviation: 'cse',
        quarter: 'winter',
        year: 2015,
      };

      return uwSws.curriculum.search(options)
        .then((result) => {
          expect(result.Curricula.length).toBeGreaterThan(2);
        });
    });
  });

  describe('search by college', () => {
    it('should return some that match the query', () => {
      const options = {
        college: 'b a',
        quarter: 'winter',
        year: 2015,
      };

      return uwSws.curriculum.search(options)
        .then((result) => {
          expect(result.Curricula.length).toBeGreaterThan(4);
        });
    });
  });
});
