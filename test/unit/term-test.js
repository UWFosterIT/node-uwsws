import uwsws from '../../src/index';

describe('Term', function() {

  this.timeout(3000);

  beforeEach(function() {

    let config = {
      baseUrl: 'https://ucswseval1.cac.washington.edu/student/v5/',
      cert: '/home/marc/.keys/milesm.bschool.pem',
      key: '/home/marc/.keys/ItsAllGood.key'
    };

    uwsws.initialize(config);
  });

  describe('Current', () => {
    it('should return one when it is known to exist', () => {
      expect(uwsws.term.current()).to.be.true;
    });
  });

  describe('Next', function() {
    it('should return one when it is known to exist', function(done) {
      uwsws.term.next( function (err, response, body) {
        console.log(body);
        done();
      });
    });
  });

  describe('Previous', () => {
    it('should return one when it is known to exist', () => {
      expect(uwsws.term.previous()).to.be.true;
    });
  });

  describe('Search', () => {
    it('should return matching quarter and year', () => {
      expect(uwsws.term.search(2015, "autumn")).to.be.true;
    });
  });
});
