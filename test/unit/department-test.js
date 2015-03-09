import path       from 'path';
import {back}     from 'nock';
//var nockBack = require('nock').back;
import uwsws      from '../../src/index';

describe('Department', function() {

  before(() => {
    back.fixtures = path.join(process.cwd(), process.env.FIXTURES);
  });

  this.timeout(3000);
  //var keys = ['Year', 'NextTerm', 'Quarter'];

  beforeEach(() => {

    let config = {
      baseUrl: 'https://ws.admin.washington.edu/student/v5/',
      cert: '/home/marc/.keys/milesm.bschool.pem',
      key: '/home/marc/.keys/ItsAllGood.key'
    };

    uwsws.initialize(config);
  });

  describe('Search', () => {
    it('should return some', (done) => {
      back('department-search.json', function (nockDone) {
        let options = {abrev: 'engr'};
        uwsws.department.search(options, (err, response, departments) => {
          nockDone();
          expect(departments).to.have.length.above(5);
          done();
        });
      });
     });
  });

});
