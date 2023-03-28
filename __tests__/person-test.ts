import { ICertFetcher } from '../src/certFetcher/ICertFetcher';
import { UwSws, CertFetcherManager } from '../src/index';
import { LogLevel } from '../src/IUwSwsOptions';

import config from './setup/config';

let fetcher: ICertFetcher;
let certData;
let uwSws: UwSws;

describe('Person', () => {
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

  describe('Get', () => {
    it('should return ont that matches the query', () => {
      const regId = '9136CCB8F66711D5BE060004AC494FFE';

      return uwSws.person.get(regId)
        .then((result) => {
          expect(result.UWNetID).toEqual('javerage');
        });
    });
  });

  describe('Search', () => {
    it('should return some that match the query', () => {
      const options = { netId: 'javerage' };

      return uwSws.person.search(options)
        .then((result) => {
          expect(result.Persons.length).toBeGreaterThan(0);
          expect(result.Persons[0].UWNetID).toEqual('javerage');
        });
    });
  });
});
