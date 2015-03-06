import path   from 'path';
import {back} from 'nock';
import uwsws  from '../../src/index';

describe('Campus', function() {

  before(() => {
    back.fixtures = path.join(process.cwd(), process.env.FIXTURES);
  });

  this.timeout(3000);

  beforeEach(() => {

    let config = {
      baseUrl: 'https://ws.admin.washington.edu/student/v5/',
      cert: '/home/marc/.keys/milesm.bschool.pem',
      key: '/home/marc/.keys/ItsAllGood.key'
    };

    uwsws.initialize(config);
  });

  describe('All', () => {
    it('should return each campus', (done) => {
      back('campus.json', function (nockDone) {
        uwsws.campus.all( (err, response, data) => {
          nockDone();
          expect(data.length).to.be.above(2);
          done();
        });
      });
     });
  });
});
