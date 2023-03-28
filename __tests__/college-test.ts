import { ICertFetcher } from '../src/certFetcher/ICertFetcher';
import { UwSws, CertFetcherManager } from '../src/index';
import { LogLevel } from '../src/IUwSwsOptions';

import config from './setup/config';

jest.setTimeout(10000);

let fetcher: ICertFetcher;
let certData;
let uwSws: UwSws;

describe('College', () => {
  beforeAll(async () => {
    const certFetcherManager = new CertFetcherManager();

    fetcher = certFetcherManager.getFetcher('s3');
    certData = await fetcher.readCertificate(config.certInfo);

    uwSws = new UwSws({
      organizationName: config.organizationName,
      baseUrl: config.baseUrl,
      certData,
      // eslint-disable-next-line @typescript-eslint/dot-notation
      logLevel: config.uwSwsLogLevel as LogLevel,
    });
  });

  describe('Search', () => {
    it('should return many colleges for Seattle', () => {
      const options = { campusShortName: 'Seattle' };

      return uwSws.college.search(options)
        .then((result) => {
          expect(result![0].CampusShortName).toEqual(options.campusShortName);
          expect(result!.length).toBeGreaterThan(2);
        });
    });

    it('should return only spring of 2008 for Seattle', () => {
      const options = {
        campusShortName: 'Seattle',
        quarter: 'spring',
        year: 2008,
      };

      return uwSws.college.search(options)
        .then((result) => {
          result!.forEach((college) => {
            expect(college.Year).toEqual(options.year);
            expect(college.Quarter).toEqual(options.quarter);
          });
        });
    });

    it('should return future terms of colleges for Seattle', () => {
      const options = { campusShortName: 'Seattle', futureTerms: 0 };

      let currentCount = 0;

      return uwSws.college.search(options)
        .then((firstResult) => {
          currentCount = firstResult!.length;
          options.futureTerms = 2;
          return uwSws.college.search(options)
            .then((secondResult) => {
              expect(secondResult!.length).toBeGreaterThan(currentCount);
            });
        });
    });
  });
});
