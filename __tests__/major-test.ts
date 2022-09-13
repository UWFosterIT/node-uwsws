import { ICertFetcher } from '../src/certFetcher/ICertFetcher';
import { UwSws, CertFetcherManager } from '../src/index';

import config from './setup/config';

let fetcher: ICertFetcher;
let certData;
let uwSws: UwSws;

describe('Major', () => {
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

  describe('Get', () => {
    it('should return a major search response message', () => {
      const options = {
        campus: 'SEATTLE',
        degreeLevel: 1,
        degreeType: 2,
        majorAbbreviation: 'B A',
        pathway: '00',
        quarter: 'autumn',
        year: '2018',
      };

      return uwSws.major.search(options)
        .then((result) => {
          expect(result.Students.length).toBeGreaterThan(1);
        });
    });
  });
});
