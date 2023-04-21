import { ICertFetcher } from '../src/certFetcher/ICertFetcher';
import { UwSws, CertFetcherManager } from '../src/index';

import config from './setup/config';

let fetcher: ICertFetcher;
let certData;
let uwSws: UwSws;

describe('Registration', () => {
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

  describe('Search by person', () => {
    it('should return many', () => {
      const options = { regId: '9136CCB8F66711D5BE060004AC494FFE' };

      return uwSws.registration.search(options)
        .then((result) => {
          expect(result.Registrations.length).toBeGreaterThan(20);
        });
    });
  });
});
