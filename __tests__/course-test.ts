import { ICertFetcher } from '../src/certFetcher/ICertFetcher';
import { UwSws, CertFetcherManager } from '../src/index';

import config from './setup/config';

let fetcher: ICertFetcher;
let certData;
let uwSws: UwSws;

describe('Course', () => {
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
    it('should return some that match the query', () => {
      const options = {
        courseNumber: '142',
        curriculumAbbreviation: 'cse',
        quarter: 'winter',
        year: 2015,
      };

      return uwSws.course.get(options)
        .then((result) => {
          expect(result.CourseNumber).toEqual('142');
        });
    });
  });

  describe('Search', () => {
    it('should return some that match the query', () => {
      const options = {
        curriculumAbbreviation: 'math',
        quarter: 'winter',
        year: 2015,
      };

      return uwSws.course.search(options)
        .then((result) => {
          expect(result.Courses.length).toBeGreaterThan(7);
        });
    });
  });
});
