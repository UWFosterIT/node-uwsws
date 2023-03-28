import { ICertFetcher } from '../src/certFetcher/ICertFetcher';
import { UwSws, CertFetcherManager } from '../src/index';
import { LogLevel } from '../src/IUwSwsOptions';

import config from './setup/config';

let fetcher: ICertFetcher;
let certData;
let uwSws: UwSws;

describe('Enrollment', () => {
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

  const dummy = '9136CCB8F66711D5BE060004AC494FFE';

  describe('Get Registrations', () => {
    it('should return some registrations for an enrolled term', () => {
      const options = {
        quarter: 'autumn',
        regId: dummy,
        year: 1998,
      };

      return uwSws.enrollment.getRegistrations(options)
        .then((result) => {
          expect(result.Registrations.length).toBeGreaterThan(2);
        });
    });
  });

  describe('Search', () => {
    it('should return some enrolled terms', () => {
      const options = { regId: dummy };

      return uwSws.enrollment.getEnrolledTerms(options)
        .then((result) => {
          expect(result.Enrollments.length).toBeGreaterThan(20);
        });
    });
  });
});
