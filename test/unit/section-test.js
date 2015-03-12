import {back} from 'nock';
import config from '../setup/config';
import uwsws  from '../../src/index';

describe('Section', function() {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Get', () => {
    it('should return one that matches the query', (done) => {
      back('section-get.json', (nockDone) => {

        let options = {
          year: 2015,
          quarter: 'winter',
          curriculum: 'cse',
          course: '142',
          section: 'A'
        };

        uwsws.section.get(options, (err, response, result) => {
          nockDone();
          expect(result.SectionID).to.equal("A");
          done(err);
        });
      });
    });
  });

  describe('Search',() => {
    it('should return many that match the query', (done) => {
      back('section-search.json', (nockDone) => {

        let options = {
          year: 2015,
          quarter: 'winter',
          curriculum: 'math'
        };

        uwsws.section.search(options, (err, response, result) => {
          nockDone();
          expect(result.Sections).to.have.length.above(200);
          done(err);
        });
      });
    });
  });
});
