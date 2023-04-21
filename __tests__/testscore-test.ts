import { ICertFetcher } from '../src/certFetcher/ICertFetcher';
import { UwSws, CertFetcherManager } from '../src/index';

import config from './setup/config';

let fetcher: ICertFetcher;
let certData;
let uwSws: UwSws;

describe('TestScore', () => {
  beforeAll(async () => {
    const certFetcherManager = new CertFetcherManager();

    fetcher = certFetcherManager.getFetcher('s3');
    certData = await fetcher.readCertificate(config.certInfo);

    uwSws = new UwSws({
      organizationName: config.organizationName,
      baseUrl: config.baseUrl,
      certData,
      // eslint-disable-next-line @typescript-eslint/dot-notation
      uwSwsLogLevel: config.uwSwsLogLevel,
    });
  });

  describe('Get by type', () => {
    it('should return many test scores', () => {
      const options = { regId: '9136CCB8F66711D5BE060004AC494FFE' };

      return uwSws.testScore.get(options)
        .then((result) => {
          expect(result.TestsTaken.length).toBeGreaterThan(3);
        });
    });

    it('should return only SAT test scores', () => {
      const options = {
        regId: '9136CCB8F66711D5BE060004AC494FFE',
        testType: 'SAT',
      };

      return uwSws.testScore.get(options)
        .then((result) => {
          const tests = result.TestsTaken;
          expect(tests.length).toBeGreaterThan(3);
          tests.forEach((value) => {
            expect(value.TestType.Name).toContain('SAT');
          });
        });
    });
  });
});
