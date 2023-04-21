import { ICertFetcher } from '../src/certFetcher/ICertFetcher';
import { UwSws, CertFetcherManager } from '../src/index';

import config from './setup/config';

let fetcher: ICertFetcher;
let certData;
let uwSws: UwSws;

describe('Section', () => {
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

  describe('Get', () => {
    it('should return one that matches the query', () => {
      const options = {
        courseNumber: '142',
        curriculumAbbreviation: 'cse',
        quarter: 'winter',
        sectionId: 'A',
        year: 2015,
      };

      return uwSws.section.get(options)
        .then((result) => {
          expect(result.SectionID).toEqual('A');
        });
    });
  });

  describe('Search', () => {
    it('should return many that match the query', () => {
      const options = {
        curriculumAbbreviation: 'math',
        quarter: 'winter',
        year: 2015,
      };

      return uwSws.section.search(options)
        .then((result) => {
          expect(result.Sections.length).toBeGreaterThan(200);
        });
    });
  });
});
