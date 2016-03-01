import '../setup/';
import uwsws  from '../../src/index';

describe('Person', function() {

  beforeEach(() => {
    uwsws.initialize(config);
  });

  describe('Get', () => {
    it('should return ont that matches the query', (done) => {
      let regid = '9136CCB8F66711D5BE060004AC494FFE';

      uwsws.person.get(regid, (err, response, person) => {
        expect(person.UWNetID).to.equal('javerage');
        done(err);
      });
    });
  });

  describe('Search',() => {
    it('should return some that match the query', (done) => {
      let options = {
        netid: 'javerage'
      };

      uwsws.person.search(options, (err, response, result) => {
        expect(result.Persons).to.have.length.above(0);
        expect(result.Persons[0].UWNetID).to.equal('javerage');
        done(err);
      });
    });
  });
});
